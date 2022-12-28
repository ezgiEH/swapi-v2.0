import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Starship.module.css'

function Starship({ starship }) {

  // Get the id from the url
  function getId(url) {
    return url.split('/')[url.split('/').length - 2]
  }
  const id = getId(starship.url)


  return (
    <Link to={`/starships/${id}`} >
      <div className={styles.card}>
        <div className={styles.top}>
          <img className={styles.floating} src={`/assets/ships/${id}.png`}></img>
        </div>
        <div className={styles.badget}>{starship.model}</div>
        <div className={styles.header}><span>{starship.name}</span></div>
      </div>
    </Link>
  )
}

export default Starship