import React from 'react'
import Page1 from './page/Page1'
import Page2 from './page/Page2'
import Page3 from './page/Page3'
import Page4 from './page/Page4'
import Page5 from './page/Page5'
import Page6 from './page/Page6'
import Page7 from './page/Page7'
import Page8 from './page/Page8'
import Page9 from './page/Page9'
import Page10 from './page/Page10' 
import Header from './components/Header'
const App = () => {
  return (
    <>
      <div id="main"> 
        <Header />
        <Page1 />  
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
        <Page6/>
        <Page7/>
        <Page8/>
        <Page9/>
        <Page10/> 
      </div>
    </>
  )
}

export default App