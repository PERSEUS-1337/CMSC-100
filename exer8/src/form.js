import React from 'react'
import PostsList from './postsList'

export default function form() {
  return (
    <div class='main-box-mid'>
        <div class='form-box'>
            <input placeholder="WHAT'S ON YOUR MIND?" id='form-text' />
        </div>
        <PostsList />
    </div>
    )
}
