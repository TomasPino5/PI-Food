import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { recipesByName } from '../../redux/actions';


const SearchBar = () => {

    const [name, setName] = useState('');
    
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(recipesByName(name));
    };

    const handleChange = (event) => {
        setName(event.target.value);
     }

    return (
        <div className={styles.searchDiv}>
            <input className={styles.searchInput} type='search' value={name} onChange={handleChange}/>
            <button className={styles.boton} onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;