import Cards from "../../components/cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allRecipes, allDiets } from "../../redux/actions";

const HomePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allRecipes())
        dispatch(allDiets())
    }, [dispatch])

    return (
        <div>
            <Cards/>
        </div>
    )
}

export default HomePage;