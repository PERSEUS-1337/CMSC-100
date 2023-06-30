import React from 'react'

export default function friends({friend}) {
  return (
    <>
    <hr className='line' />
    <div className='friend-text-box'>
        <h4>{friend.Name}</h4>
        <p>Age: {friend.Age}</p>
        <p>Mututal Friends: {friend['Mutual Friends']}</p>
    </div>
    </>
  )
}
