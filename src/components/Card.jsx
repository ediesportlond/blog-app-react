import {Link} from 'react-router-dom'

export default function Card({ post }) {
  console.log(post)
  return (
    <>
      <Link to={`/single/${post._id}`} style={{color: "white", textDecoration: "none"}}>
        <h2>{post.author}</h2>
        <small>{post.date}</small>
        <p>{post.blog}</p>
      </Link>
    </>
  )
}