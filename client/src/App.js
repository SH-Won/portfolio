import React from 'react'
import Header from './component/Header'
import Intro from './component/Intro'
import Project from './component/Project'
import Skill from './component/Skill'

const App = () => {
  return (
    <div className="App">
        <Header/>
        <a name="INTRO"><Intro/></a>
        {/* <a name="SKILL"><Skill/></a> */}
        <Skill/>
        <a name="PROJECT"><Project/></a>
    </div>
  )
}

export default App