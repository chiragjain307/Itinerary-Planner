import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleTheme = (event) => {
    setDarkMode(!darkMode)
    if (event.target.checked) {
      document.documentElement.setAttribute('class', 'dark');
    } else {
      document.documentElement.removeAttribute('class');
    }
  }
  return (
    <header className='py-3 shadow sticky top-0 bg-white border-b border-gray-200 dark:bg-black dark:text-white'>
      <nav className="flex mx-auto max-w-7xl items-center justify-between gap-x-6 px-6 py-2 lg:px-8">
        <div>
          <Link to='/'>
            <img alt="logo" className=' w-12' />
          </Link>
        </div>
        <div>
          <ul className='flex'>
            {navItems.map((item) => {
              return (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.to)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >{item.name}</button>
                </li>
              )
            })}
            <li>
              <button className='p-2 rounded-md font-semibold text-white bg-teal-600 hover:bg-teal-500'>
                Book Now
              </button>
            </li>

            <input
              type="checkbox"
              value=""
              className=""
              onChange={toggleTheme}
              checked={darkMode}
            />

          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar