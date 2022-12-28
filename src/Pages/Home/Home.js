import React from 'react'
import styles from './Home.module.css';
import starship from './12.png'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.leftSection}>
          <img src={starship} className={styles.floating} alt='starships' />
        </div>
        
        <div className={styles.rightSection}>
        <div className={styles.rectangle}></div>
          <div className={styles.content}>
            <div className={styles.header}>
              <p>Starwars<br/><span>Starships</span></p>
            </div>
            <div className={styles.text}>
              <p>May the force be with you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home