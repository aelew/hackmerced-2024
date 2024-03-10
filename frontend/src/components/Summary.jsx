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
            (pollenForecast[0].pollenTypeInfo[1].indexInfo.value === 5
              ? 'red'
              : pollenForecast[0].pollenTypeInfo[1].indexInfo.value === 4
                ? 'orange'
                : pollenForecast[0].pollenTypeInfo[1].indexInfo.value === 3
                  ? 'yellow'
                  : pollenForecast[0].pollenTypeInfo[1].indexInfo.value === 2
                    ? 'yellowgreen'
                    : pollenForecast[0].pollenTypeInfo[1].indexInfo.value === 1
                      ? 'green'
                      : '')
          }
        >
          <Card
            icon="🌻 Pollen Levels"
            text={
              `Pollen levels are ${pollenForecast[0].pollenTypeInfo[1].indexInfo.category} in your area currently! 
              ${pollenForecast[0].pollenTypeInfo[1].indexInfo.value > 2 ?  'Be warry of allergens and consider taking allergy medication.': 'Allergies should be of no concern today.'}`
            }
          />
        </div>
        <div
          className={
            'card ' +
            (airQualityIndexes[0].aqi < 20
              ? 'red'
              : airQualityIndexes[0].aqi < 40
                ? 'orange'
                : airQualityIndexes[0].aqi < 60
                  ? 'yellow'
                  : 'green')
          }
        >
          <Card
            icon="🏭 Air Quality"
            text={
              `Your area has ${airQualityIndexes[0].category}! 
              ${airQualityIndexes[0].aqi<60 ? 'Consider bringing a mask and avoid staying out too long if suffering from respiratory issues.' 
              : 'Air is healthy and breatheable.'}`
            }
          />
        </div>
        <div className={'card ' + ((settings.tolerances.airQualityTolerance<airQualityIndexes[0].aqi 
                && 100/settings.tolerances.pollenTolerance <= pollenForecast[0].pollenTypeInfo[1].indexInfo.value
                && !(settings.vulnerabilities.allergy && pollenForecast[0].pollenTypeInfo[1].indexInfo.value>2)
                && !(settings.vulnerabilities.respiratory && airQualityIndexes[0].aqi<50)
                && !(settings.vulnerabilities.immuneSystem && airQualityIndexes[0].aqi<60&&pollenForecast[0].pollenTypeInfo[1].indexInfo.value>=2)
                ) ? 'green' : 'red')}>
          <Card
            icon={
              '✅or❌'
            }
            text = {
              (settings.tolerances.airQualityTolerance<airQualityIndexes[0].aqi 
                && 100/settings.tolerances.pollenTolerance <= pollenForecast[0].pollenTypeInfo[1].indexInfo.value
                && !(settings.vulnerabilities.allergy && pollenForecast[0].pollenTypeInfo[1].indexInfo.value>2)
                && !(settings.vulnerabilities.respiratory && airQualityIndexes[0].aqi<50)
                && !(settings.vulnerabilities.immuneSystem && airQualityIndexes[0].aqi<60&&pollenForecast[0].pollenTypeInfo[1].indexInfo.value>=2)
              ) ? 'Considering the data provided, you do not need to worry about respiratory issues or allergies. Enjoy some time outside!' 
                : 'Considering the data provided, we recommend you stay in doors.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
