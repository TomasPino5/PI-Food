const axios = require('axios');
require('dotenv').config();
const { ID_URL, API_KEY } = process.env;
const { Recipe, Diet } = require('../db')

const getRecipeById = async (idRecipe) => {

    const cleanRecipe = (recipe) => {
            let diets = [];
            let instrucciones = [];
            if (recipe.diets) {
                diets = recipe.diets;
                instrucciones = recipe.analyzedInstructions.flatMap((step) => step.steps.map((s) => s.step));
            } else if (recipe.Diets) {
                diets = recipe.Diets.map((diet) => diet.name);
                instrucciones = recipe.analyzedInstructions
            }

            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                analyzedInstructions: instrucciones,
                diets: diets,
            };
        }

    if(idRecipe.length > 31) {
        const dbRecipe = await Recipe.findOne({
            idRecipe,
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
        return cleanRecipe(dbRecipe);
    } else {
        const apiResponse = (await axios.get(`${ID_URL}${idRecipe}/information?apiKey=${API_KEY}`)).data
        return cleanRecipe(apiResponse)
    }
}

module.exports = getRecipeById;