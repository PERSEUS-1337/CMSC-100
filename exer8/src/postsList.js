import React from 'react'
import Posts from './posts'

export default function postsList() {
  const posts = [
    {
      "Timestamp": "August 10, 2019 07:36 PM",
      "PostAuthor": "Garnett Sidney",
      "Content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus arcu sed metus feugiat, vitae euismod mi bibendum. Phasellus dictum neque nec dolor consectetur, ut rhoncus tortor tempus. Mauris luctus viverra nisl sed malesuada. Aliquam eleifend, nisi auctor hendrerit feugiat, mi lacus egestas magna, tincidunt consequat metus nisl euismod ipsum. Praesent ultrices finibus ipsum at euismod. In ac purus diam. Morbi pellentesque ipsum at mollis aliquet. Vestibulum scelerisque tincidunt massa, id vestibulum orci fringilla a. Cras posuere nibh quis arcu pharetra commodo. Morbi bibendum, nunc sit amet pulvinar sodales, purus sapien faucibus est, in porta orci eros quis massa. Nulla tellus odio, viverra at commodo et, ultrices in dolor. Suspendisse sit amet libero sapien. Phasellus vitae nisl ultricies, sagittis orci vel, mollis diam. In ut purus pulvinar, lacinia mi vitae, rutrum odio."
    },
    {
      "Timestamp": "March 6, 2016 01:15 PM",
      "PostAuthor": "Jawdat Fen",
      "Content": "Vivamus quis dignissim turpis, id egestas magna. Pellentesque vel dolor vel magna aliquet faucibus ac vitae neque. Praesent et sapien sit amet purus rutrum molestie ac nec augue. Donec tempor nisi velit, a maximus libero molestie sed. Vivamus eu metus vitae purus fermentum pharetra. Ut in sem a leo vestibulum molestie. Maecenas lacinia elementum leo, ut tempor est tristique vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
      "Timestamp": "April 30, 2021 10:32 AM",
      "PostAuthor": "Chinonso Shyama",
      "Content": "Praesent sit amet diam ullamcorper, consectetur diam vel, pulvinar tellus. Quisque in tempus arcu. Nunc at porta nunc, id eleifend elit. In massa leo, feugiat eu venenatis et, cursus facilisis leo. Curabitur suscipit mauris eu vestibulum blandit. Pellentesque vel feugiat quam. Sed congue dapibus molestie. Proin scelerisque maximus purus, eget dignissim magna euismod commodo. Sed volutpat tortor nec erat hendrerit vulputate. Quisque rhoncus aliquam aliquet. Integer eget elementum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      "Timestamp": "November 12, 2004 08:50 AM",
      "PostAuthor": "Katlego Eef",
      "Content": "Mauris tempor, augue in blandit tincidunt, nisl metus tempus nibh, id sagittis dui tellus bibendum turpis. Vivamus efficitur, tortor sed commodo sagittis, magna tellus feugiat lorem, a gravida nibh nulla ac lectus. Pellentesque condimentum nibh in mauris tincidunt, eget pharetra libero viverra. Aenean porta magna eu magna vulputate, in semper massa blandit. Nullam quis aliquet metus, quis tristique enim. Ut rutrum fermentum porta. Sed laoreet eu nisl at vulputate. Quisque justo elit, ultricies sit amet velit vel, volutpat vestibulum sem. Nam suscipit imperdiet fermentum. Praesent mattis risus efficitur augue lacinia, a bibendum diam porta."
    },
    {
      "Timestamp": "July 6, 2019 04:47 AM",
      "PostAuthor": "Jaden Tamandani",
      "Content": "Curabitur nec feugiat tellus. Nulla elementum commodo ligula ut malesuada. Morbi fermentum enim sit amet lacus accumsan sollicitudin. Nullam lacus dolor, tincidunt ut venenatis ut, interdum eu sem. Proin ut suscipit odio. Pellentesque dictum faucibus eros sed pharetra. Integer vitae nibh ac ante maximus condimentum. Nulla facilisi. Aenean nec lobortis magna. Pellentesque est metus, dapibus quis dolor quis, vulputate elementum urna. Phasellus ultrices commodo nulla vitae luctus. Suspendisse pharetra dictum mauris sit amet sagittis. Donec interdum vitae nibh at tristique."
    }
  ]

  const postsList = posts.map(post => <Posts post={post}/>)
  return (
    <>
      {postsList}
    </>
  )
}

