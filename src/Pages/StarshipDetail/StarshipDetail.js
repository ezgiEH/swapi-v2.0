import { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
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
              <div className={styles.shipName}><p>{starship.name}</p></div>
               <div className={styles.floating} ><img src={`/assets/ships/${id}.png`} alt='starship'></img></div>
              </div>
              <div className={styles.rectangle}></div>
              <div className={styles.rigthSection}>
                <div className={styles.card}>
                  <div className={styles.badget}>{starship.model}</div>
                  <div className={styles.info}>
                    <ul>
                      <li><p>Manufacturer: <b>{starship.manufacturer}</b></p></li>
                      <li><p>Cost in Credits: <b>{starship.cost_in_credits}</b></p></li>
                      <li><p>Length: <b>{starship.length}</b></p></li>
                      <li><p>Max Atmosphering Speed: <b>{starship.max_atmosphering_speed}</b></p></li>
                      <li><p>Crew: <b>{starship.crew}</b></p></li>
                      <li><p>Passengers: <b>{starship.passengers}</b></p></li>
                      <li><p>Cargo Capacity: <b>{starship.cargo_capacity}</b></p></li>
                      <li><p>Starship Class: <b>{starship.starship_class}</b></p></li>
                      <li><p>Hyperdrive Rating: <b>{starship.hyperdrive_rating}</b></p></li>
                      <li><p>MGLT: <b>{starship.MGLT}</b></p></li>
                      <li><p>Consumables: <b>{starship.consumables}</b></p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
}


export default StarshipDetail