var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

router.use('/hotels', require('./hotels.js'));

router.use('/restaurants', require('./restaurants.js'));

router.use('/activities', require('./activities.js'));

router.use('/days', require('./days.js'));

// router.use('/', function(req, res, next){
//   res.send("what are you looking for");
// });

module.exports = router;