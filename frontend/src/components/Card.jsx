import React from 'react'

const Card = ({icon, text}) => {
  return (
    <div>
        <div className="icon">{icon}</div>
        <p>{text}</p>
    </div>
  )
}

export default Card
