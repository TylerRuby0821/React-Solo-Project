const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');



const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const notebookRouter = require('./notebook.js');
const noteRouter = require('./note.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/notebook', notebookRouter);

router.use('/note', noteRouter);

module.exports = router;
