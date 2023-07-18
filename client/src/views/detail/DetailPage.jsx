import { useParams } from 'react-router-dom';
import { recipeById } from '../../redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DetailPage = () => {

    const { id } = useParams();

    const dispatch = useDispatch()

    const detail = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(recipeById(id))
    }, [dispatch, id])

    return (
        <div>
            {detail.id ? (
                <div>
                    <h1>Title: {detail.title}</h1>
                    <img src={detail.image} alt='' />
                    <p>Resume: {detail.summary}</p>
                    <h2>Score: {detail.healthScore}⭐</h2>
                    <p>Steps: {detail.analyzedInstructions}</p>
                    <p>Diets: {detail.diets}</p>
                    <p>Id: {detail.id}</p>
                </div>
            ) : (
                <p>Cargando información del personaje...</p>
            )}
        </div>
    )
}

export default DetailPage;