import React, { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import Button from './Button.jsx';
import QualitySlider from './QualitySlider.jsx';
import SelectButton from './SelectButton.jsx';

const Sidebar = ({ displaySummary, setMap }) => {
  const [selectedType, setSelectedType] = useState('');
  const[profile, setProfile] = useState({
    userName:String, 
  });
  const [vulnerabilities, setVulnerabilities] = useState({
    allergy: Boolean,
    respiratory: Boolean,
    immuneSystem: Boolean,
  });

  const [tolerance, setTolerance] = useState({
    pollenTolerance: Number,
    airQualityTolerance: Number,
    radiationTolerance: Number,
    covidTolerance: Number,
    fluTolerance: Number,
  });
  const handleSelectedType = (type) => {
    setSelectedType(type);
    displaySummary(type);
  };
  return (
    <div className="sidebar active">
      <h1>
        Settings <IoMdSettings size={50} />
      </h1>
      <h3>Tracking:</h3>
      <div className="section">
        {/* add weed, tree, grass subsection drop downs possibly?*/}
        {['Pollen', 'Air Quality', 'Radiation', 'Covid-19', 'Flu'].map(
          (type) => (
            <SelectButton
              key={type}
              text={type}
              type="radio"
              isSelected={selectedType === type}
              onChange={() => handleSelectedType(type)}
              setMap={setMap}
            />
          )
        )}
      </div>
      <h3>Vulnerabilities:</h3>
      <div className="section">
        <SelectButton text="Allergy" type="checkbox" />
        <SelectButton text="Respiratory" type="checkbox" />
        <SelectButton text="Immune System" type="checkbox" />
      </div>
      <h3>Personal Tolerances:</h3>
      <div className="section">
        <QualitySlider text="Pollen" />
        <QualitySlider text="Air Quality" />
        <QualitySlider text="Radiation" />
        <QualitySlider text="Covid-19" />
        <QualitySlider text="Flu" />
      </div>
      <Button text="Calculate" displaySummary={displaySummary} />
    </div>
  );
};

export default Sidebar;
