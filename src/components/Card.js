import React from 'react'

const Card = ({item}) => {
  return (
    <div className='feature-info text-center flex flex-col gap-3'>
        <h3 className='uppercase font-bold'>{item.title}</h3>
        <p>{item.des}</p>
    </div>
  )
}

export default Card