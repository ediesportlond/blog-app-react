import { Link } from "react-router-dom"

export default function Nav(){
  return (
    <>
      <ul style={{listStyle: 'none'}}>
        <li><Link to="/" style={{textDecoration:'none', color: 'white'}}>Home</Link></li>
        <li><Link to="/add" style={{textDecoration:'none', color: 'white'}}>New</Link></li>
      </ul>
    </>
  )
}