const getRecipeById = require('../controllers/getRecipeById');

const getRecipeByIdHandler = async (req, res) => {
    try {
        const { idRecipe } = req.params;
        const recipe = await getRecipeById(idRecipe)
        return res.status(200).json(recipe)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getRecipeByIdHandler;