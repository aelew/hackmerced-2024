import React from 'react'
import Select from 'react-select'

const conditions = [
    {
    value: 'Allergies',
    label: 'Allergies'
    },
    {
      value: 'Asthma',
      label: 'Asthma'
    },
    {
      value: 'Immune System Vulnerability',
      label: 'Immune System Vulnerability'
    },
    {
      value: 'Lung Issues',
      label: 'Lung Issues'
    },
    {
      value: 'Flu Vaccine',
      label: 'Flu Vaccine'
    },
    {
      value: 'Covid-19 Vaccine',
      label: 'Covid-19 Vaccine'
    },
    {
      value: 'Heart Conditions',
      label: 'Heart Conditions'
    }
  ]


const Selector = () => {
    const customStyles = {
        control: base => ({
          ...base,
          width: 200,
        })
      };
    return(
        <Select
            defaultValue={[]}
            isMulti
            name="Medical Info"
            options={conditions}
            className="basic-multi-select"
            classNamePrefix="select"
            width={400}
            styles={customStyles}
        />
    )
};

export default Selector;
