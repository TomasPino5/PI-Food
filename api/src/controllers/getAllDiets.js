const { Diet } = require('../db')
const axios = require('axios')
const { URL, API_KEY } = process.env;
require('dotenv').config();

const getAllDiets = async () => {
    const response = await axios.get(`${URL}?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    const apiRecipes = response.data.results;
    const apiDiets = apiRecipes.flatMap((recipe) => recipe.diets);

    const addDietsToDatabase = async (apiDiets) => {
        for (let dieta of apiDiets) {
            await Diet.findOrCreate({
                where: { name: dieta },
                defaults: { name: dieta },
            });
        }
        console.log('Dietas agregadas a la base de datos.');
    }
    await addDietsToDatabase(apiDiets);
    return await Diet.findAll()

    // const allDiets = await Diet.findAll();

    // const dietsArray = allDiets.map((diet) => diet.name);
    // return dietsArray;
}

module.exports = getAllDiets