import React from 'react'
import Card from './Card.jsx'
import { useState } from 'react'
const Summary = () => {
  const[safe, setSafety] = useState(true)
  const[status, setStatus] = useState(['red', 'orange', 'green', 'yellow', 'green'])
  return (

    <div className = 'summary-card' >
      <h1>Summary:</h1>
      <div className="grid">
        <div className={'card ' + status[0]}><Card icon = '🌻 Pollen Levels' text={'Pollen levels are very high in your area currently! Be warry of allergens and consider taking allergy medication. '}/></div>
        <div className={'card ' + status[1]}><Card icon = '🏭 Air Quality' text={'Air Quality is moderately contaminated in your area currently! Consider bringing a mask and avoid staying out too long if suffering from respiratory issues.'}/></div>
        <div className={'card ' + status[2]}><Card icon = '☢️ Radiation Levels' text={'Radiation levels are low in your area currently! Current conditions are completely safe in terms of Radiation.'}/></div>
        <div className={'card ' + status[3]}><Card icon = '🦠 Covid Cases' text={'There are currently 20 known cases of Covid-19 in your area. Consider wearing a mask and practicing moderate social distancing.'}/></div>
        <div className={'card ' + status[4]}><Card icon = '🤧 Flu Cases' text = {'There are currently no known cases of the Flu in your area! Despite a low risk of catching the Flu practice common sense hygeine regardless. '}/> </div>
        <div className="card"><Card icon = {safe ? '✅ It is Safe To Go Out!': '❌ It is not recommended to go out!'}/></div>
        
      </div>
    </div>
  )
}

export default Summary
