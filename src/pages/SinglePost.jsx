import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SinglePost() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form, setForm] = useState({})

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/single/${id}`)
      .then(res => res.json())
      .then((res) => {
        setForm({ ...form, author: res.author, blog: res.blog, date: res.date })
      })
      .catch(console.error)
  }, [id, form])

  const handleForm = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${process.env.REACT_APP_ENDPOINT}/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(() => {
        navigate('/')
      })
      .catch(console.error)
  }

  const deletePost = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
      .then((res) => {
        console.log(res)
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
        <input type="text" name='author' value={form.author} onChange={handleForm} />
        <label htmlFor='date'>Date</label>
        <input type="date" name='date' value={form.date} onChange={handleForm} />
        <label htmlFor='blog'>Post</label>
        <textarea name="blog" id="" cols="30" rows="10" value={form.blog} onChange={handleForm}></textarea>
        <input className='submit-btn' type="submit" value="Update Post" />
        <button className='delete-btn' onClick={deletePost}>❌</button>
      </form>
      <Footer />
    </>
  )
}