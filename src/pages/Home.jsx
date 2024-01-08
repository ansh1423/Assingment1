import React from 'react'
import Block2 from '../components/Home/Block2'
import Block1 from '../components/Home/Block1'
import Block3 from '../components/Home/Block3'
import Block4 from '../components/Home/Block4'
import Block5 from '../components/Home/Block5'
import Block6 from '../components/Home/Block6'
import Block7 from '../components/Home/Block7'

import Header from '../layout/header'
import Footer from '../layout/footer'

// import Header from '../layout/Header'

function Home() {
  return (
    <>
      <Header/>
      <Block1/>
       <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Block6/>
      <Block7/> 
       <Footer/>
    </>
  )
}

export default Home