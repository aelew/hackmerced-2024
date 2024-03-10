import React, { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import Button from './Button.jsx';
import QualitySlider from './QualitySlider.jsx';
import SelectButton from './SelectButton.jsx';
import Selector from './Selector.jsx';

const Sidebar = ({ displaySummary, setMap }) => {
  const [selectedType, setSelectedType] = useState('');
  const [profile, setProfile] = useState({
    userName: String
  });

  const [tolerance, setTolerance] = useState({
    pollenTolerance: Number,
    airQualityTolerance: Number,
    radiationTolerance: Number,
    covidTolerance: Number,
    fluTolerance: Number
  });
  const handleSelectedType = (type) => {
    setSelectedType(type);
  };
  return (
    <div className="sidebar active">
      <h1>
        Settings <IoMdSettings size={50} />
      </h1>
      <h3>Show On Map:</h3>
      <div className="section">
        {/* add weed, tree, grass subsection drop downs possibly?*/}
        {['Default', 'Pollen', 'Air Quality', 'Covid-19', 'Flu'].map(
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
      <h3>Medical Information:</h3>
      <div className="section">
        <Selector />
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
