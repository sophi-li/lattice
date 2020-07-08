import React from 'react'
import Features from '../Features'
import YouTube from 'react-youtube'

import logo from './logos/performance-logo.svg'
import feedbackLogo from './logos/feedback-logo.svg'
import reviewLogo from './logos/reviews-logo.svg'
import oneOnOneLogo from './logos/11-logo.svg'
import goalsLogo from './logos/goals-logo.svg'
import praiseLogo from './logos/praise-logo.svg'
import updatesLogo from './logos/updates-logo.svg'

import styles from './Performance.module.css'

const featureList = [
  {
    logo: reviewLogo,
    title: 'Reviews',
    description:
      'Reflect on indiviual performance and get formal feedback from peers and managers',
  },
  {
    logo: feedbackLogo,
    title: 'Feedback',
    description: 'Share constructive critcism to help each other improve',
  },
  {
    logo: oneOnOneLogo,
    title: '1:1s',
    description:
      'Collaborate on angenda to structure the conversation and collect next steps',
  },
  {
    logo: goalsLogo,
    title: 'Goals',
    description:
      'Employees know how they can impact the company and their career',
  },
  {
    logo: praiseLogo,
    title: 'Praise',
    description: 'Celebrate wins together and get recognized for hard work',
  },
  {
    logo: updatesLogo,
    title: 'Updates',
    description: 'Share status updates with the company and managers',
  },
]

const Performance = () => (
  <div className={styles.container}>
    <div className={styles.color}></div>
    <div className={styles.contentContainer}>
      <img src={logo} alt="" />
      <p className={styles.title}>PERFORMANCE</p>
      <p className={styles.subtitle}>
        Continuous performance management software
      </p>
      <YouTube videoId="4WDrCDW8MI8" className={styles.youtube} />
      <div className={styles.featureContainer}>
        {featureList.map((element) => (
          <Features
            logo={element.logo}
            feature={element.title}
            description={element.description}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Performance
