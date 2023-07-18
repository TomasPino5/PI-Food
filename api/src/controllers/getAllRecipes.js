const { Recipe, Diet } = require ('../db');
require('dotenv').config();
const { URL, API_KEY } = process.env;
const axios = require('axios')

const getAllRecipes = async () => {

    const cleanRecipe = (array) => 
        array.map((recipe) => {
            
            let diets = [];
            let created = false;
            if (recipe.diets) {
                diets = recipe.diets;
            } else if (recipe.Diets) {
                diets = recipe.Diets.map((diet) => diet.name);
            }
            if (recipe.created !== undefined) {
                created = recipe.created;
            }

            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                diets: diets,
                healthScore: recipe.healthScore,
                created: created,
            };
            
        })

    const dbData = await Recipe.findAll({ 
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })

    const dbRecipes = cleanRecipe(dbData);
    const apiResponse = (await axios.get(`${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data    
    const apiRecipes = cleanRecipe(apiResponse.results)
    
    return [...dbRecipes, ...apiRecipes];
}

module.exports = getAllRecipes;
