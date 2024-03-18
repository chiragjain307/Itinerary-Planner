import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Packages',
      to: '/packages'
    },
    {
      name: 'Shop',
      to: '/shop'
    },
    {
      name: 'About',
      to: '/about'
    },
    {
      name: 'Contact',
      to: '/contact'
    },
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <nav className="flex">
        <div>
          <Link to='/'>
            <img alt="logo" className=' w-12' />
          </Link>
        </div>
        <div>
          <ul className='flex'>
            {navItems.map((item)=>{
              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.to)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar