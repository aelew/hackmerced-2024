import React from 'react'

const Info = ({id, outline, data}) => {
  return (
    <div className='info'>
      {id}: {outline} {data}
    </div>
  )
}

export default Info
