import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SinglePost() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const [blog, setBlog] = useState('')
  useEffect(() => {
    fetch(`http://localhost:4040/single/${id}`)
      .then(res => res.json())
      .then((res) => {
        setAuthor(res.author)
        setDate(res.date)
        setBlog(res.blog)
      })
      .catch(console.error)
  }, [id])
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4040/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ author, date, blog })
    })
      .then(res => res.json())
      .then(() => {
        navigate('/')
      })
      .catch(console.error)
  }

  return (
    <>
      <Header />
      <h1>Update post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='author'>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor='date'>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label htmlFor='blog'>Post</label>
        <textarea name="blog" id="" cols="30" rows="10" value={blog} onChange={(e) => setBlog(e.target.value)}></textarea>
        <input className='submit-btn' type="submit" value="Update Post" />
      </form>
      <Footer />
    </>
  )
}