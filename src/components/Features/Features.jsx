import React from 'react'

import styles from './Features.module.css'

const Features = ({ logo, feature, description }) => {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.feature}>{feature}</div>
      <div>{description}</div>
      <div className={styles.explore}>Explore →</div>
    </div>
  )
}

export default Features
