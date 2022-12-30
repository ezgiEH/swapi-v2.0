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
    const loading = useSelector((state) => state.starwars.StarshipsStatus)

    function handleClick() {
        page < 4 ? setPage(page + 1) : setButton(true)
    }

    useEffect(() => {
        dispatch(fetchStarships({ page }))
    }, [dispatch, page])

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
                <div className={styles.cardList}>
                    {starships && starships.map((starship, id) =>
                        <Starship key={id} starship={starship} />
                    )}
                </div>
                <div className={styles.loadMore}>
                    <button onClick={() => handleClick()} disabled={button}>LOAD MORE</button>
                </div>
            </div>
        )
    }

}

export default Starships

