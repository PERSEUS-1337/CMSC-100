import React from 'react'

export default function ads({ad}) {
  return (
    <>
    <hr className='line' />
    <div className='ad-text-box'>
      <h3>{ad.Name}</h3>
      <p>{ad.Description}</p>
      <a className='link-text' href={ad.Link}>Click here to learn more!</a>
    </div>
    </>
  )
}
