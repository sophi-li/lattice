import React from 'react'

import styles from './ClientLogos.module.css'

import redditLogo from './logos/reddit-logo.png'
import slackLogo from './logos/slack-logo.png'
import samsaraLogo from './logos/samsara-logo.png'
import cruiseLogo from './logos/cruise-logo.png'
import asanaLogo from './logos/asana-logo.png'

const ClientLogos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>The People Management Platform</h1>
        <h2 className={styles.subtitle}>
          1,850+ organizations trust Lattice to drive performance & engagement
        </h2>
        <div className={styles.logoContainer}>
          <img src={redditLogo} alt="reddit logo" />
          <img src={slackLogo} alt="reddit logo" />
          <img src={samsaraLogo} alt="reddit logo" />
          <img src={cruiseLogo} alt="reddit logo" />
          <img src={asanaLogo} alt="reddit logo" />
        </div>
      </div>
    </div>
  )
}

export default ClientLogos
