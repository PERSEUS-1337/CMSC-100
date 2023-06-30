import React from 'react'
import Friends from './friends'

export default function friendsList() {
    const friends = [
        {
            "Name": "Bahati Ksawery",
            "Age": "69",
            "Mutual Friends": " 5"
        },
        {
            "Name": "Vasil Valeriu",
            "Age": "42",
            "Mutual Friends": "500"
        },
        {
            "Name": "Magdalen Carminho",
            "Age": "77",
            "Mutual Friends": "9000"
        },
        {
            "Name": "Madelon Stewart",
            "Age": "18",
            "Mutual Friends": "8"
        },
        {
            "Name": "Darian Jelka",
            "Age": "8",
            "Mutual Friends": "69420"
        }
    ]
    const friendsList = friends.map(friend => <Friends friend={friend}/>)
    return (
        <div className='main-box-left'>
            <h2>FRIENDS LIST</h2>
            {friendsList}
        </div>
    )
}
