import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import FindMe from '../components/FindMe'

import Mountain1 from "./assets/mountain_1_small.png"
import Mountain2 from "./assets/mountain_2_small.png"
import Mountain3 from "./assets/mountain_3_small.png"

import Myself from './Myself'

function App() {
  const [languaje, setLanguaje]= React.useState(0);

  const skills= 
    Myself.skillset[languaje].skills.map(element => <h3>{element}</h3>)
  
  return (
    <div className="App">
      <main>
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
      <ParallaxLayer
          offset={4.65}
          speed={0.2}
        >
          <img src={Mountain1} className="paralax--mountains"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.65}
          speed={0.5}
        >
          <img src={Mountain2} className="paralax--mountains"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.65}
          speed={1}
        >
          <img src={Mountain3} className="paralax--mountains"/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          className="parallax--text"
        >
          <h2>{languaje==0?"Encuéntrame aquí:": "Find me here:"}</h2>
          <FindMe
            lang={languaje}
            github={Myself.links.github}
            linkedin={Myself.links.linkedin}
            email={Myself.links.email}          
          />
        </ParallaxLayer>
      </Parallax>
      </main>
    </div>
  )
}

export default App
