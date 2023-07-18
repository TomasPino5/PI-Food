import styles from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ id, title, image, diets, healthScore }) => {

    const formattedDiets = diets.map(diet => `"${diet}"`).join(", ")

    return (
        <Link to={`/detail/${id}`} className={styles.link}>
            <div className={styles.divCard}>
                <h1 className={styles.name}>{title}</h1>
                <img className={styles.image} src={image} alt="Recipe"/>
                <p className={styles.p}>Diets: {formattedDiets}</p>
                <p className={styles.p}>{healthScore}/100⭐</p>
            </div>
        </Link>
    )
}

export default Card