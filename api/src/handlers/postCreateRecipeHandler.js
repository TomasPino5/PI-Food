const postCreateRecipe = require('../controllers/postCreateRecipe')

const postCreateRecipeHandler = async (req, res) => {
    try {
        const { title, image, summary, healthScore, analyzedInstructions, diets } = req.body
        const newRecipe = await postCreateRecipe( title, image, summary, healthScore, analyzedInstructions, diets)
        res.status(200).json(newRecipe)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = postCreateRecipeHandler;