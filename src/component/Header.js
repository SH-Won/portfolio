import React from 'react'

const Header = () => {
    const items = ['INTRO','SKILL','PROJECT'];
  return (
    <nav className="nav">
        {items.map(item => (
            <li className="nav__item">{item}</li>
        ))}
    </nav>
  )
}

export default Header