const getRecipeByName = require('../controllers/getRecipeByName')

const getRecipeByNameHandler = async (req, res) => {
    try {
        const { name } = req.query;
        if(name) {
            const nameRecipe = await getRecipeByName(name)
            return res.status(200).json(nameRecipe)
        } else {
            return res.status(500).json('La receta no existe')
        }
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getRecipeByNameHandler;