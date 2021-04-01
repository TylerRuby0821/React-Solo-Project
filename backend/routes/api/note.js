const express = require('express')
const asyncHandler = require('express-async-handler');

const { Note, sequelize } = require('../../db/models')
const { restoreUser} = require('../../utils/auth')

const router = express.Router();


router.post(
    '/',
    restoreUser,
    asyncHandler(async (req, res) => {
        const {notebookId, title, noteContent} = req.body;
        const userId = req.user.id
        const note = await Note.create({ notebookId, userId, title, noteContent})

        return res.json({
            note,
        })
    })
)

router.get(
    '/',
    asyncHandler(async(req, res) => {
        const notes = await Note.findAll({
            order: [['createdAt', 'DESC']],
            limit: 20,
        })
        res.json({notes})

    })
)
module.exports = router;
