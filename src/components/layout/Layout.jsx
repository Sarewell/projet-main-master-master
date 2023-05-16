import React from 'react'
import Hero from './hero'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div>
        <Hero/>
        <Header/>
          <main>
            {children}
          </main>
        <Footer/>
    </div>
  )
}
