const { Recipe, Diet } = require('../db')

const postCreateRecipe = async (title, image, summary, healthScore, analyzedInstructions, diets) => {
    
    const newRecipe = await Recipe.create({ 
        title, 
        image, 
        summary, 
        healthScore,
        analyzedInstructions, 
        diets
    })
    await newRecipe.addDiets(diets)

    const recipes = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    })
    return recipes;
}

module.exports = postCreateRecipe;