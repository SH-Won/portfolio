import React from 'react'
import Header from './component/Header'
import Intro from './component/Intro'
import Project from './component/Project'
import Skill from './component/Skill'

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Intro/>
        <Skill/>
        <Project/>
    </div>
  )
}

export default App