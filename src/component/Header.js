import React from 'react'

const Header = () => {
    const items = ['INTRO','SKILL','PROJECT'];
  return (
    <nav className="nav">
        {items.map(item => (
            <li className="nav__item"><a href={'#'+item}>{item}</a></li>
        ))}
    </nav>
  )
}

export default Header