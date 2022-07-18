import React from 'react'

const Header = () => {
    const items = ['INTRO','SKILL','PROJECT'];
  return (
    <nav className="nav">
        <h1 className="nav__title">sh</h1>
        <ul className="nav__item-list">
        {items.map(item => (
            <li key={item._id} className="nav__item"><a href={'#'+item}>{item}</a></li>
        ))}
        </ul>
    </nav>
  )
}

export default Header