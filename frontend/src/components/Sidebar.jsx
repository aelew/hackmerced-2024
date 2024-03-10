import React, { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import Button from './Button.jsx';
import SelectButton from './SelectButton.jsx';
import ToleranceSlider from './ToleranceSlider.jsx';

const Sidebar = ({ displaySummary, setMap }) => {
  const [selectedType, setSelectedType] = useState('None');

  const [vulnerabilities, setVulnerabilities] = useState({
    allergy: false,
    respiratory: false,
    immuneSystem: false
  });

  const [tolerance, setTolerance] = useState({
    pollenTolerance: 25,
    airQualityTolerance: 25,
    covidTolerance: 25,
    fluTolerance: 25
  });

  return (
    <div className="sidebar active">
      <h1>
        Settings <IoMdSettings size={50} />
      </h1>
      <h3>Show on map</h3>
      <div className="section">
        {/* add weed, tree, grass subsection drop downs possibly?*/}
        {['None', 'Pollen', 'Air Quality', 'COVID-19', 'Flu'].map((type) => (
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
          { label: 'Air Quality', key: 'airQualityTolerance' },
          { label: 'COVID-19', key: 'covidTolerance' },
          { label: 'Flu', key: 'fluTolerance' }
        ].map(({ label, key }) => (
          <ToleranceSlider
            key={key}
            text={label}
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
        onClick={() => displaySummary(selectedType, vulnerabilities, tolerance)}
      />
    </div>
  );
};

export default Sidebar;
