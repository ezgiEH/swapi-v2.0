import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStarships } from '../../Redux/Starwars/Sevices';
import Starship from '../../Components/Starship/Starship';
import styles from './Starships.module.css';

function Starships() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [button, setButton] = useState(false)
    const starships = useSelector((state) => state.starwars.starships)

    function handleClick() {
        page < 4 ? setPage(page + 1) : setButton(true)
    }

    useEffect(() => {
        dispatch(fetchStarships({ page }))
    }, [dispatch, page])

    console.log(starships)
    return (
        <div className={styles.container}>
            <div className={styles.cardList}>
                {starships && starships.map((starship , id) =>
                   <Starship key={id} starship={starship} />
                )}
            </div>
            <div className={styles.loadMore}>
                <button onClick={() => handleClick()} disabled={button}>LOAD MORE</button>
            </div>
        </div>
    )
}

export default Starships


 // <div>Starship
        //     {starships && starships.map((item) =>
        //         <p>{item.name}- {item.url}</p>
        //     )}
        //     <button onClick={() => handleClick()} disabled={button}>LOAD MORE</button>
        // </div>