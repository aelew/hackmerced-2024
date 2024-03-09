import Form from './Form.jsx'
import Info from './Info.jsx'
import QualitySlider from './QualitySlider.jsx'

const Sidebar = () => {
  return (
    <div className='sidebar active'>
      <h1>Settings</h1>
      <h3>Tracking:</h3>
      <div className='section'>
        <Form text='Pollen'/>
        <Form text='Air Quality'/>
        <Form text='Radiation'/>
        <Form text='Covid-19'/>
        <Form text='Flu'/>
      </div>
      <h3>Vulnerabilities:</h3>
      <div className='section'>
        <Form text='Allergy'/>
        <Form text='Respiratory'/>
        <Form text='Immune System'/>
      </div>
      <h3>Personal Tolerances:</h3>
      <div className='section'>
        <QualitySlider text='Pollen'/>
        <QualitySlider text='Air Quality'/>
        <QualitySlider text='Radiation'/>
        <QualitySlider text='Covid-19'/>
        <QualitySlider text='Flu'/>
      </div>
      <h3>Summary:</h3>
      <div className="section">
        <Info id = 'Pollen' outline = 'Air pollen concentration ' data = '5 ppm'/>
        <Info id = 'Radiation' outline = 'Radiation concentration ' data = '5% above healthy limit'/>
        <Info id = 'Air Quality' outline = 'Air Quality at this current time for your location is ' data = 'Bad'/>
        <Info id = 'Covid-19' outline = 'Number of reported Covid-19 cases at this current time for your location is ' data = '10'/>
        <Info id = 'Flu' outline = 'Number of reported Flu cases at this current time for your location is ' data = '25'/>
      </div>
    </div>
  )
}

export default Sidebar
