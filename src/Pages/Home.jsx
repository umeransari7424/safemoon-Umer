import React from 'react'
import Page2 from '../Components/ELements/Page2';
import Page3 from '../Components/ELements/Page3';
import Page4 from '../Components/ELements/Page4';
import Page5 from '../Components/ELements/Page5';
import Page6 from '../Components/ELements/Page6';
import Hero from '../Components/ELements/Hero';
// import Hero from '../Components/ELements/Hero';

function Home() {
  return (
    <div>
        <Hero/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
    </div>
  )
}

export default Home