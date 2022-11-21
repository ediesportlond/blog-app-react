import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function AddPost() {
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleForm = (e) => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4040/post',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
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
      <h1>Add a new post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='author'>Author</label>
        <input type="text" name='author' value={form.author} onChange={handleForm}/>
        <label htmlFor='date'>Date</label>
        <input type="date" name='date' value={form.date} onChange={handleForm}/>
        <label htmlFor='blog'>Post</label>
        <textarea name="blog" id="" cols="30" rows="10" value={form.blog} onChange={handleForm}></textarea>
        <input className='submit-btn' type="submit" value="Add Post" />
        </form>
      <Footer />
    </>
  )
}