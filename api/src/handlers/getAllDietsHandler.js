const getAllDiets = require('../controllers/getAllDiets')

const getAllDietsHandler = async (req, res) => {
    try {
        const allDiets = await getAllDiets()
        return res.status(200).json(allDiets)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = getAllDietsHandler