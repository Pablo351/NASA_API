const express = require('express');
const { getApod , postApod} = require('../controllers/nasa/apod.controller');
const { getMars } = require('../controllers/nasa/mars.controller');
const router = express.Router();


/* NASA endpoints*/
router.get('/apod', getApod);
router.post('/apod', postApod);

router.get('/mars/:rover',getMars);


module.exports = router;