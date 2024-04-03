import React from 'react'
import Aside from './Aside'
import Section from './Section'
import { Header } from './Header'
import Footer from './Footer'

export function Layout() {
  return (
    <>
    <Header/>
    <main>
      <div className='container h-100 a_cont'>
        <div className='row h-100'>
          <Aside param='a_leftaside'>Left Aside</Aside>
          <Section>Page1</Section>
          <Aside param='a_rightaside'>Right Aside</Aside>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}
