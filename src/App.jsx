import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Myself from './Myself'

function App() {
  const [languaje, setLanguaje]= React.useState(0);

  const skills= 
    Myself.skillset[languaje].skills.map(element => <h3>{element}</h3>)
  
  return (
    <div className="App">
      <Parallax pages={5}>
        <ParallaxLayer
          factor={5}
          className="parallax"
        />
        <ParallaxLayer
          offset={0}
          speed={1}
          className="parallax--text"
        >
          <h2>{Myself.description[languaje]}</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          className="parallax--text"
        >
          <h2>{Myself.occupation[languaje]}</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          className="parallax--text"
        >
          <h2>{Myself.skillset[languaje].title}</h2>
          {skills}
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          className="parallax--text"
        >
          <h2>{Myself.other[languaje].title}</h2>
          <h3>{Myself.other[languaje].text}</h3>
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default App
