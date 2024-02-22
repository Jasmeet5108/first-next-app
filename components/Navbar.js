import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className='flex justify-between'>
          <h3 className='font-semibold text-3xl'>Jasmeet Singh</h3>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>Skills</li>
            <a href='#projects'>Projects</a>
            <a href='/contact'>Contact</a>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar