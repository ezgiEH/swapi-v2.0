import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchStarship } from '../../Redux/Starwars/Sevices';
import styles from './Detail.module.css'

function StarshipDetail() {
  const dispatch = useDispatch()
  // Get the id from the url
  const { id } = useParams()
  // Get the starship data
  const starship = useSelector((state) => state.starwars.starship)
  const loading = useSelector((state) => state.starwars.StarshipsStatus)

  useEffect(() => {
    dispatch(fetchStarship({ id }))
}, [dispatch, id])

  console.log(starship)
  if (loading === 'loading') {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    )
}
else {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.leftSection}>
               <div className={styles.floating} alt='starship'><img src={`/assets/ships/${id}.png`}></img></div>
               <div className={styles.shipName}>{starship.name}</div>
              </div>
              <div className={styles.rectangle}></div>
              <div className={styles.rigthSection}>
                
              </div>
            </div>
        </div>
    )
}
}

export default StarshipDetail