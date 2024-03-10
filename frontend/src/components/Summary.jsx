import React, { useState } from 'react';

import { useAppContext } from '../AppContext.js';
import Card from './Card.jsx';

const Summary = ({ summaryRef, settings }) => {
  const [safe, setSafety] = useState(true);
  const [status, setStatus] = useState([
    'red',
    'orange',
    'green',
    'yellow',
    'green'
  ]);

  const { place, airQualityIndexes, pollenForecast } = useAppContext();

  const data = [25, 50, 25, 0, 100];

  // check your browser console to see the data
  console.log('settings:', settings);
  console.log('place:', place);
  console.log('airQualityIndexes:', airQualityIndexes);
  console.log('pollenForecast:', pollenForecast);

  return (
    <div className="summary-card" ref={summaryRef}>
      <h1>Summary</h1>
      <div className="grid">
        <div
          className={
            'card ' +
            (data[0] > 75
              ? 'red'
              : data[0] > 50
                ? 'orange'
                : data[0] > 25
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="🌻 Pollen Levels"
            text={
              'Pollen levels are very high in your area currently! Be warry of allergens and consider taking allergy medication. '
            }
          />
        </div>
        <div
          className={
            'card ' +
            (data[1] > 75
              ? 'red'
              : data[1] > 50
                ? 'orange'
                : data[1] > 25
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="🏭 Air Quality"
            text={
              'Air Quality is moderately contaminated in your area currently! Consider bringing a mask and avoid staying out too long if suffering from respiratory issues.'
            }
          />
        </div>
        <div
          className={
            'card ' +
            (data[2] > 75
              ? 'red'
              : data[2] > 50
                ? 'orange'
                : data[2] > 25
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="☢️ Radiation Levels"
            text={
              'Radiation levels are low in your area currently! Current conditions are completely safe in terms of Radiation.'
            }
          />
        </div>
        <div
          className={
            'card ' +
            (data[3] > 75
              ? 'red'
              : data[3] > 50
                ? 'orange'
                : data[3] > 25
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="🦠 COVID-19 Cases"
            text={
              'There are currently 20 known cases of COVID-19 in your area. Consider wearing a mask and practicing moderate social distancing.'
            }
          />
        </div>
        <div
          className={
            'card ' +
            (data[4] > 75
              ? 'red'
              : data[4] > 50
                ? 'orange'
                : data[4] > 25
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="🤧 Flu Cases"
            text={
              'There are currently no known cases of the Flu in your area! Despite a low risk of catching the Flu practice common sense hygeine regardless. '
            }
          />{' '}
        </div>
        <div className="card">
          <Card
            icon={
              safe
                ? '✅ It is Safe To Go Out!'
                : '❌ It is not recommended to go out!'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
