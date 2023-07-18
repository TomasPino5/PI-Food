const axios = require('axios')
require('dotenv').config();
const { URL, API_KEY } = process.env;
const { Recipe, Diet } = require('../db')
const { Op } = require('sequelize');

const getRecipeByName = async (name) => {
    
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

        const dbrecipes = await Recipe.findAll({ 
            where: { 
                title: { [Op.iLike]: `%${name}%` }
            },
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        })
        const dbRecipesByName = cleanRecipe(dbrecipes);

    const apiResponse = (await axios.get(`${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data    
    const apiRecipes = cleanRecipe(apiResponse.results)
    const recipesApiFilter = apiRecipes.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()))

    return [...dbRecipesByName, ...recipesApiFilter];
}

module.exports = getRecipeByName;