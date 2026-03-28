import React from 'react'
import Reload from './components/Reload'
import TitleChanger from './components/TitleChanger'
import Timer from './components/Timer'
import UserData from './components/UserData'

const App = () => {
  return (
    <div>
      <Reload />
      <TitleChanger />
      <Timer />
      <UserData />
    </div>
  )
}

export default App