const { Router } = require('express');
const getRecipeByIdHandler = require('../handlers/getRecipeByIdHandler')
const getRecipeByNameHandler = require('../handlers/getRecipeByNameHandler')
const postCreateRecipeHandler = require('../handlers/postCreateRecipeHandler')
const getAllDietsHandler = require('../handlers/getAllDietsHandler')
const getAllRecipesHandler = require('../handlers/getAllRecipesHandler')
const router = Router();

router.get('/recipes/:idRecipe', getRecipeByIdHandler)
router.get('/recipes', getRecipeByNameHandler)
router.post('/recipes', postCreateRecipeHandler)
router.get('/diets', getAllDietsHandler)
router.get('/', getAllRecipesHandler)

module.exports = router;
