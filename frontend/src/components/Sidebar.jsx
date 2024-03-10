import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import { useAppContext } from '../AppContext.js';
import { getApiBaseUrl } from '../lib/utils.js';
import Button from './Button.jsx';
import SelectButton from './SelectButton.jsx';
import ToleranceSlider from './ToleranceSlider.jsx';

const Sidebar = ({ displaySummary, setMap }) => {
  const [selectedType, setSelectedType] = useState('None');
  const { place } = useAppContext();

  const [vulnerabilities, setVulnerabilities] = useState({
    allergy: false,
    respiratory: false,
    immuneSystem: false
  });

  const [tolerance, setTolerance] = useState({
    pollenTolerance: 25,
    airQualityTolerance: 25
  });

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        authorizationParams: {
          audience: 'https://mapnosis.co/api/'
        }
      }).then((accessToken) => {
        fetch(`${getApiBaseUrl()}/settings`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data) {
              setVulnerabilities(res.data.vulnerabilities);
              setTolerance(res.data.tolerances);
            }
          });
      });
    } else {
      console.log('User is not authenticated, skipping settings fetch');
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="sidebar active">
      <h1>
        Settings <IoMdSettings size={50} />
      </h1>
      <h3>Show on map</h3>
      <div className="section">
        {/* add weed, tree, grass subsection drop downs possibly?*/}
        {['None', 'Pollen', 'Air Quality'].map((type) => (
          <SelectButton
            key={type}
            text={type}
            type="radio"
            isSelected={selectedType === type}
            onChange={() => setSelectedType(type)}
            setMap={setMap}
          />
        ))}
      </div>
      <h3>Vulnerabilities</h3>
      <div className="section">
        {[
          { label: 'Allergy', key: 'allergy' },
          { label: 'Respiratory', key: 'respiratory' },
          { label: 'Immune System', key: 'immuneSystem' }
        ].map(({ label, key }) => (
          <SelectButton
            key={key}
            text={label}
            type="checkbox"
            isSelected={vulnerabilities[key]}
            onChange={(e) =>
              setVulnerabilities({
                ...vulnerabilities,
                [key]: e.currentTarget.checked
              })
            }
          />
        ))}
      </div>
      <h3>Personal Tolerances</h3>
      <div className="section" style={{ gap: '1rem' }}>
        {[
          { label: 'Pollen', key: 'pollenTolerance' },
          { label: 'Air Quality', key: 'airQualityTolerance' }
        ].map(({ label, key }) => (
          <ToleranceSlider
            key={key}
            text={label}
            value={tolerance[key]}
            type="checkbox"
            onChange={(value) =>
              setTolerance({
                ...tolerance,
                [key]: value
              })
            }
          />
        ))}
      </div>
      <Button
        text="Calculate"
        onClick={() => {
          if (!place) {
            alert('Please select a location first!');
            return;
          }
          displaySummary(vulnerabilities, tolerance);
        }}
      />
    </div>
  );
};

export default Sidebar;
