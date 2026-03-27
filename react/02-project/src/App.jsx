import React from 'react'
import Greeting from './components/Greeting';
import AboutMe from './components/AboutMe';
import StudentCard from './components/StudentCard';
import LikeButton from './components/LikeButton';

const App = () => {
  return (
    <div>
      <Greeting name="Zoha" city="Gujranwala" age={20} />
      <Greeting name="Zoya" city="Islamabad" age={21} />
      <Greeting name="Zoii" city="Multan" age={19} />
      <AboutMe />
      <StudentCard name="Usman" subject="computer" marks={100}/>
      <StudentCard name="Shreya" subject="computer" marks={10}/>
      <StudentCard name="Roha" subject="computer" marks={90}/>
      <LikeButton />
    </div>
  )
}

export default App