const express = require('express');
const router = express.Router();


const controlRouter = require('../controllers/control');


router.use('/', controlRouter);

module.exports = router;
