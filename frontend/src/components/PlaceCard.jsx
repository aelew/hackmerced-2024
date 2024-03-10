import { useEffect, useState } from 'react';

import { useAppContext } from '../AppContext';

export default function PlaceCard() {
  const [pollenForecast, setPollenForecast] = useState([]);
  const { place } = useAppContext();

  useEffect(() => {
    if (place) {
      const url = new URL('https://pollen.googleapis.com/v1/forecast:lookup');
      url.searchParams.set('key', import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
      url.searchParams.set('location.longitude', place.geometry.location.lng());
      url.searchParams.set('location.latitude', place.geometry.location.lat());
      url.searchParams.set('days', 5);
      fetch(url)
        .then((res) => res.json())
        .then((data) => setPollenForecast(data.dailyInfo))
        .catch((err) => console.error('failed to fetch pollen forecast:', err));
    }
  }, [place]);

  if (!place) {
    return null;
  }

  return (
    <div className="place-card">
      <div>
        <h1>{place.name}</h1>
        <p>{place.formatted_address}</p>
      </div>
      <div className="place-card-section">
        <div>
          <h2>Pollen Forecast</h2>
          <p>Daily pollen information for the next 5 days</p>
        </div>
        <div className="pollen-forecasts">
          {pollenForecast.map((forecast) => (
            <div
              key={`${forecast.date.year}+${forecast.date.month}+${forecast.date.day}`}
              className="pollen-forecast-entry"
            >
              <h3 style={{ fontSize: '1.125rem' }}>
                {forecast.date.month}/{forecast.date.day}/{forecast.date.year}
              </h3>
              <div className="pollen-info">
                {forecast.pollenTypeInfo.map((pollenType) => (
                  <div className="pollen-type-card" key={pollenType.code}>
                    <div className="pollen-type-card-header">
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
