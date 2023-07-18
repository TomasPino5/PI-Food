import axios from 'axios'

export const ALL_RECIPES = "ALL_RECIPES"
export const ID_RECIPE = "ID_RECIPE"
export const ALL_DIETS = "ALL_DIETS"
export const NAME_RECIPES = "NAME_RECIPES"
export const DIETS_FILTER = "DIETS_FILTER"
export const ORIGIN_FILTER = "ORIGIN_FILTER"
export const ORDER_RECIPES = "ORDER_RECIPES"
export const HEALTH_RECIPES = "HEALTH_RECIPES"

export const allRecipes = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/')
            const recipes = response.data
            dispatch ({
                type: ALL_RECIPES,
                payload: recipes,
            });
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}


export const allDiets = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/diets`)
            const diets = response.data
            dispatch ({
                type: ALL_DIETS,
                payload: diets,
            })
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}

export const createRecipe = (form) => {
    return async () => {
        try {
            await axios.post("http://localhost:3001/recipes", form)
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}

export const recipesByName = (name) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            const nameRecipes = response.data
            dispatch ({
                type: NAME_RECIPES,
                payload: nameRecipes,
            })
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}

export const recipeById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            const idRecipe = response.data
            dispatch ({
                type: ID_RECIPE,
                payload: idRecipe,
            })
        } catch (error) {
            console.error(error);
            throw error
        }
    }
}

export const filterByDiets = (diet) => {
    return { type: DIETS_FILTER, payload: diet }
}

export const filterByOrigin = (created) => {
    return { type: ORIGIN_FILTER, payload: created }
}

export const orderRecipes = (order) => {
    return { type: ORDER_RECIPES, payload: order }
}

export const healthRecipes = (score) => {
    return { type: HEALTH_RECIPES, payload: score }
}