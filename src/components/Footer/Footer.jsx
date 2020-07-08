import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.clone}>Clone of Lattice</p>
      <div className={styles.sourcecode}>
        <a
          className={styles.sourcecodeLink}
          href="https://github.com/sophi-li/lattice"
          target="__blank"
        >
          Source Code
        </a>
      </div>
    </div>
  )
}

export default Footer
