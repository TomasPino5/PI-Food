import styles from './Cards.module.css'
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { filterByDiets, filterByOrigin, orderRecipes, healthRecipes } from '../../redux/actions'

const Cards = () => {

    const recipes = useSelector(state => state.recipes);
    const diets = useSelector(state => state.diets);

    const dispatch = useDispatch();

    const handleDietsFilter = (event) => {
        const selectedDiet = diets.find(diet => diet.id === parseInt(event.target.value));

        if (selectedDiet) {
            dispatch(filterByDiets(selectedDiet.name));
        } else {
            dispatch(filterByDiets(""));
        }
    };

    const handleOriginFilter = (event) => {
        if (event.target.value === "true") {
            dispatch(filterByOrigin(true))
        } else if (event.target.value === "false") {
            dispatch(filterByOrigin(false))
        } else {
            dispatch(filterByOrigin(""))
        }
    }

    const handlealphabeticalOrder = (event) => {
        dispatch(orderRecipes(event.target.value))
    }

    const handlescoreOrder = (event) => {
        dispatch(healthRecipes(event.target.value))
    }

    return (
        <div className={styles.botones}>
            <div>
                <select onChange={handleDietsFilter}>
                    <option value="">All Diets</option>
                    {diets.map((diet) => (
                        <option key={diet.id} value={diet.id}>{diet.name}</option>
                    ))}
                </select>
                <select onChange={handleOriginFilter}>
                    <option value="">Origin</option>
                    <option value="true">Created</option>
                    <option value="false">API</option>
                </select>
                <select onChange={handlealphabeticalOrder}>
                    <option value="">Order</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handlescoreOrder}>
                    <option value="">Score</option>
                    <option value="-+">Menor a Mayor</option>
                    <option value="+-">Mayor a Menor</option>
                </select>
            </div>
            <div className={styles.divStyle}>
                {recipes.map(({ id, title, image, diets, healthScore, created }) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        image={image}
                        diets={diets}
                        healthScore={healthScore}
                        created={created}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards;