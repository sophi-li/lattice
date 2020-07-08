import React from 'react'
import logo from './lattice-logo.svg'

import Subtitle from './components/Subtitle'
import Performance from './components/Performance'
import Demo from './components/Demo'
import ClientLogos from './components/ClientLogos'
import Footer from './components/Footer'

import styles from './App.module.css'

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Subtitle />
      <Performance />
      <Demo />
      <ClientLogos />
      <Footer />
    </div>
  )
}

export default App
