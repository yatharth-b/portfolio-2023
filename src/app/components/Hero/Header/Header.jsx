import './Header.css'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='header'>
      <a className='profilepiclink' href='/'>
        <img src='/home.jpg' className='profilepic'></img>
      </a>
      <a className="page" href='/design'>Design</a>
      <a className="page" href='/dev'>Dev</a>
      <a className="page" href='/blog'>Blog</a>
    </div>
  )
}