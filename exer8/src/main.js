import React from 'react'
import Form from './form'
import FriendsList from './friendsList'
import AdsList from './adsList'

export default function main() {
  return (
    <div className='main-container'>
      <FriendsList />
      <Form />
      <AdsList />
    </div>
  )
}
