import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from '../Home/Home'
import Starships from '../Starships/Starships'
import StarshipsDetail from '../StarshipDetail/StarshipDetail'
import Contact from '../Contact/Contact'
import Error from '../Error/Error'
import styles from './Navigate.module.css';
import { FaBars } from "react-icons/fa";


function Navigate() {
    return (
        <div>
            <Router>
                <div className={styles.navbar}>
                    <Link to="/"><header>STARWARS</header></Link>
                    <div className={styles.line}></div>
                    <div className={styles.menu}>
                        <div className={styles.menuItem} ><Link to="/">00 HOME</Link></div>
                        <div className={styles.menuItem}><Link to="/starships">01 STARSHIPS</Link></div>
                        <div className={styles.menuItem}><Link to="/contact">02 CONTACT</Link></div>
                    </div>
                    <div className={styles.hamburger}><FaBars/></div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/starships/:id' element={<StarshipsDetail />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navigate