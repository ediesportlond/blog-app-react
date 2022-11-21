import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function AddPost() {
  const navigate = useNavigate()
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const [blog, setBlog] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4040/post',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({author, date, blog})
    })
    .then(res=>res.json())
    .then(()=>{
      navigate('/')
    })
    .catch(console.error)
  }
  return (
    <>
      <Header />
      <h1>AddPost.jsx</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='author'>Author</label><br />
        <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}/><br />
        <label htmlFor='date'>Date</label><br />
        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/><br />
        <label htmlFor='blog'>Post</label><br />
        <textarea name="blog" id="" cols="30" rows="10" value={blog} onChange={(e)=> setBlog(e.target.value)}></textarea><br />
        <input type="submit" value="Add Post" />
        </form>
      <Footer />
    </>
  )
}