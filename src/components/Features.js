import React from 'react'
import Card from './Card'

const data = [
    {
        id: 1,
        title: "LOWEST PRICES",
        des: "We find the cheapest train tickets, so you can wander for less."
    },
    {
        id: 1,
        title: "BEST TRAVEL OPTIONS",
        des: "We find the cheapest bus & train tickets, so you can wander for less."
    },
    {
        id: 1,
        title: "QUICK & EASY BOOKING",
        des: "Book trips quickly with a simple, hassle-free checkout – online & on our app."
    },
    {
        id: 1,
        title: "FAST CUSTOMER SUPPORT",
        des: "We find the cheapest bus & train tickets, so you can wander for less."
    }

]

const Features = () => {
  return (
    <div className='features grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10'>
        {
            data.map((item) => (
                <Card key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Features