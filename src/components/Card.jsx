import { Link } from 'react-router-dom'

export default function Card({ post }) {
  return (
    <>
      <Link to={`/single/${post._id}`} style={{ color: "white", textDecoration: "none" }}>
        <div className="single-card">
          <img src={`https://source.unsplash.com/random?sig=${post._id}`} alt="" />
          <div className="card-content">
            <h3>{post.author}</h3>
            <small>{post.date}</small>
            <p>{post.blog}</p>
          </div>
        </div>
      </Link>
    </>
  )
}