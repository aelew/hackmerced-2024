import { useEffect } from 'react';
import { LuX } from 'react-icons/lu';

import { useAppContext } from '../AppContext';

export default function PlaceCard() {
  const {
    place,
    airQualityIndexes,
    pollenForecast,
    setPlace,
    setAirQualityIndexes,
    setPollenForecast
  } = useAppContext();

  useEffect(() => {
    if (place) {
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();

      // Fetch current AQI conditions
      fetch(
        `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
        {
          body: JSON.stringify({ location: { latitude, longitude } }),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }
      )
        .then((res) => res.json())
        .then((data) => setAirQualityIndexes(data.indexes))
        .catch((err) => console.error('failed to fetch aqi data:', err));

      // Fetch pollen forecast data
      const url = new URL('https://pollen.googleapis.com/v1/forecast:lookup');
      url.searchParams.set('key', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
      url.searchParams.set('location.latitude', latitude);
      url.searchParams.set('location.longitude', longitude);
      url.searchParams.set('days', 5);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setPollenForecast(data.dailyInfo))
        .catch((err) => console.error('failed to fetch pollen forecast:', err));
    }
  }, [place, setAirQualityIndexes, setPollenForecast]);

  if (!place) {
    return null;
  }

  return (
    <div className="place-card">
      <div>
        <div className="place-card-header">
          <h1>{place.name}</h1>
          <button
            onClick={() => setPlace(null)}
            style={{
              backgroundColor: 'transparent',
              height: 'fit-content',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            <LuX size={20} />
          </button>
        </div>
        <p>{place.formatted_address}</p>
      </div>
      <div className="place-card-section">
        <div>
          <h2>Current air quality conditions</h2>
          <p>Air quality data is updated hourly.</p>
        </div>
        <div className="place-card-data">
          {airQualityIndexes.map((aqi) => (
            <div className="place-sub-card" key={aqi.code}>
              <div className="place-sub-card-header">
                <strong>{aqi.displayName}</strong>
              </div>
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  gap: '0.25rem'
                }}
              >
                <strong>{aqi.aqi}</strong> - {aqi.category}{' '}
                <div
                  style={{
                    backgroundColor: `rgb(${aqi.color.red * 255}, ${aqi.color.green * 255}, ${aqi.color.blue * 255})`,
                    borderRadius: '0.25rem',
                    height: '16px',
                    width: '16px'
                  }}
                />
              </div>
              <p>Dominant pollutant: {aqi.dominantPollutant.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="place-card-section">
        <div>
          <h2>Pollen Forecast</h2>
          <p>Daily pollen information for the next 5 days</p>
        </div>
        <div className="place-card-data">
          {pollenForecast.map((forecast) => (
            <div
              key={`${forecast.date.year}+${forecast.date.month}+${forecast.date.day}`}
              className="pollen-forecast-entry"
            >
              <h3 style={{ fontSize: '1.125rem' }}>
                {forecast.date.month}/{forecast.date.day}/{forecast.date.year}
              </h3>
              <div className="place-card-section-data">
                {forecast.pollenTypeInfo.map((pollenType) => (
                  <div className="place-sub-card" key={pollenType.code}>
                    <div className="place-sub-card-header">
                      <strong>{pollenType.displayName}</strong>
                      {pollenType.inSeason ? (
                        <span style={{ color: '#f59e0b' }}>In season</span>
                      ) : (
                        <span style={{ color: '#71717a' }}>Not in season</span>
                      )}
                    </div>
                    {pollenType.healthRecommendations?.map((recommendation) => (
                      <p key={recommendation}>{recommendation}</p>
                    ))}
                    {pollenType.indexInfo && (
                      <div>
                        <div
                          style={{
                            alignItems: 'center',
                            display: 'flex',
                            gap: '0.25rem'
                          }}
                        >
                          <strong>
                            {pollenType.indexInfo.displayName} (
                            {pollenType.indexInfo.code}):
                          </strong>{' '}
                          {pollenType.indexInfo.value} -{' '}
                          {pollenType.indexInfo.category}{' '}
                          <div
                            style={{
                              backgroundColor: `rgb(0, ${pollenType.indexInfo.color.green * 255}, ${pollenType.indexInfo.color.blue * 255})`,
                              borderRadius: '0.25rem',
                              height: '16px',
                              width: '16px'
                            }}
                          />
                        </div>
                        <p>{pollenType.indexInfo.indexDescription}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
