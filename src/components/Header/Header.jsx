import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <div className="header-contents">
        <h2 className="header-title">Order Your Favourite Food Here</h2>
        <p>
            Choose from a diverse menu featuring delicious cuisines,
            customize your order to your liking, and enjoy swift delivery
            right to your doorstep. Savor the convenience and taste of
            restaurant quality meals without leaving your home!
        </p>
        <button>View Menu</button>
    </div>
    </div>
  )
}

export default Header
