import {useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home(){
  const [posts, setPosts] = useState()
  useEffect(()=> {
    fetch('http://localhost:4040/')
    .then(res=>res.json())
    .then(setPosts)
    .catch(console.error)
  },[])
  return (
    <>
      <Header />
      <main>
      {
        posts?.map(post => (
          <Card post={post} />
        ))
      }
      </main>
      <Footer />
    </>
  )
}