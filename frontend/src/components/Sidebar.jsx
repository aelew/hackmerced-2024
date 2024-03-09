import SelectButton from './SelectButton.jsx'
import QualitySlider from './QualitySlider.jsx'
import { IoMdSettings } from "react-icons/io";
import Button from './Button.jsx'

const Sidebar = ({onClick}) => {
  return (
    <div className='sidebar active'>
      <h1>Settings <IoMdSettings size={50}/></h1>
      <h3>Tracking:</h3>
      <div className='section'>
        <SelectButton text='Pollen' type='radio'/>
        <SelectButton text='Air Quality' type='radio'/>
        <SelectButton text='Radiation' type='radio'/>
        <SelectButton text='Covid-19' type='radio'/>
        <SelectButton text='Flu' type='radio'/>
      </div>
      <h3>Vulnerabilities:</h3>
      <div className='section'>
        <SelectButton text='Allergy' type='checkbox'/>
        <SelectButton text='Respiratory' type='checkbox'/>
        <SelectButton text='Immune System' type='checkbox'/>
      </div>
      <h3>Personal Tolerances:</h3>
      <div className='section'>
        <QualitySlider text='Pollen'/>
        <QualitySlider text='Air Quality'/>
        <QualitySlider text='Radiation'/>
        <QualitySlider text='Covid-19'/>
        <QualitySlider text='Flu'/>
      </div>
      <Button text='Calculate' onClick = {onClick}/>
    </div>
  )
}

export default Sidebar
