import Cards from "../../components/cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes, allDiets } from "../../redux/actions";
import styles from "./HomePage.module.css"

const HomePage = () => {

    const recipes = useSelector((state) => state.recipes);
    const diets = useSelector((state) => state.diets);
    
    const dispatch = useDispatch()

    const recipesPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(allRecipes())
        dispatch(allDiets())
    }, [dispatch])

    const handleNextPage = () => {
        setCurrentPage((nextPage) => nextPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((previousPage) => previousPage - 1);
    };

    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;

    const recipesToDisplay = recipes.slice(startIndex, endIndex);

    return (
        <div>
            <Cards recipes={recipesToDisplay} diets={diets}/>
            <div>
                {currentPage > 1 && <button className={styles.button} onClick={handlePreviousPage}>Previous</button>}
                {endIndex < recipes.length && <button className={styles.button} onClick={handleNextPage}>Next</button>}
            </div>
        </div>
    )
}

export default HomePage;