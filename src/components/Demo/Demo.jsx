import React from 'react'

import styles from './Demo.module.css'
const Demo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Schedule product demo</h1>
      <h2 className={styles.subtitle}>
        Our team is happy to answer your questions and take you on a product
        demo.
      </h2>
      <form className={styles.formContainer}>
        <label htmlFor="first name">
          First Name:
          <input type="text" />
        </label>
        <label htmlFor="last name">
          Last Name:
          <input type="text" />
        </label>
        <label htmlFor="email">
          Email Address:
          <input type="email" />
        </label>
        <label htmlFor="phone number">
          Phone Number:
          <input type="" />
        </label>
        <label htmlFor="company name">
          Company Name:
          <input type="text" />
        </label>
        <label htmlFor="company size">
          Company Size:
          <select>
            <option value="Please Select">--- Please Select ---</option>
            <option value="0-20">0-20</option>
            <option value="21-100">21-100</option>
            <option value="21-100">101-500</option>
            <option value="501-1000">501-1000</option>
            <option value="1001-5000">1001-5000</option>
            <option value="5000+">5000+</option>
          </select>
        </label>
        <button className={styles.submitBtn} type="submit">
          Get Started
        </button>
      </form>
    </div>
  )
}

export default Demo
