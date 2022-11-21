import {useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home(){
  const [posts, setPosts] = useState()
  useEffect(()=> {
    fetch(process.env.REACT_APP_ENDPOINT+'/')
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
          <Card key={post._id}post={post} />
        ))
      }
      </main>
      <Footer />
    </>
  )
}