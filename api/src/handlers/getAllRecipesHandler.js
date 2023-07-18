const getAllRecipes = require('../controllers/getAllRecipes')

const getAllRecipesHandler = async (req, res) => {
    try {
        const allRecipes = await getAllRecipes()
        return res.status(200).json(allRecipes)  
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getAllRecipesHandler;