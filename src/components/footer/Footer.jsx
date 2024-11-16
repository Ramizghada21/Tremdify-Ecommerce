import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div>
      <footer className='text-gray-600 body-font bg-pink-600'>
        <div className='container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col'>
          <a>
            <span>E-BHARAT</span>
          </a>
          <p>2024 ebharat -
            <Link to={'/'}
            target='_blank'
            >@ebharat</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer