import React from 'react'

export default function posts({post}) {
  return (
    <>
    <div className='post-box'>
        <div className='post-main'>
            <p id='post-content'>{post.Content}</p>
            <div className='post-details'>
                <p id="post-author">{post.PostAuthor}|</p>
                <p id='post-timestamp'>{post.Timestamp}</p>
            </div>
        </div>
    </div>
    </>
  )
}
