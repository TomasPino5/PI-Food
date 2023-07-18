import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link to="/home">
                <button className={styles.botones}>Home</button>
            </Link>
            <Link to="/form">
                <button className={styles.botones}>Form</button>
            </Link>
            <SearchBar/>
        </nav>
    )
}

export default Nav;