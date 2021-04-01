const express = require('express')
const asyncHandler = require('express-async-handler');

const { Notebook, sequelize } = require('../../db/models')
const { restoreUser} = require('../../utils/auth')

const router = express.Router();


router.post(
    '/',
    restoreUser,
    asyncHandler(async (req, res) => {
        const {name} = req.body;
        const userId = req.user.id
        const notebook = await Notebook.create({ userId, name})

        return res.json({
            notebook,
        })
    })
)

router.get(
    '/',
    asyncHandler(async(req, res) => {
        const notebooks = await Notebook.findAll({
            order: [['createdAt', 'DESC']],
            limit: 20,
        })
        res.json({notebooks})

    })
)
module.exports = router;
