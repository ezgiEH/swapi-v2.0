import React from 'react'
import styles from './Contact.module.css'
import github from './github.svg'
import linkedin from './linkedin.svg'
import website from './code-solid.svg'


function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <header>If you have any question/feedback, please do not hesitate to reach out to <a href='#'>Me!.</a></header>
        <div className={styles.box}>
          <div className={styles.item}>
            <div className={styles.rectangle}></div>
            <a href='https://github.com/ezgiEH' target="_blank">
              <figure>
                <img src={github} alt='ezgiEh github'></img>
                <figcaption>
                  <header>GitHub</header>
                  <p>Detail</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className={styles.item}>
            <div className={styles.rectangle}></div>
            <a href='https://www.linkedin.com/in/ezgihocaoglu/' target="_blank">
              <figure>
                <img src={linkedin} alt='ezgiEh github'></img>
                <figcaption>
                  <header>Linkedin</header>
                  <p>Detail</p>
                </figcaption>
              </figure>
            </a>
          </div>
          <div className={styles.item}>
            <div className={styles.rectangle}></div>
            <a href='http://hello.ezgihocaoglu.co/' target="_blank">
              <figure>
                <img src={website} alt='ezgi hoceoglu'></img>
                <figcaption>
                  <header>Web Site</header>
                  <p>Detail</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact