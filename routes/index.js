var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Promise = require('bluebird');

router.use('/api', require('./api/attraction.js'));

router.get('/', function(req, res) {
  console.log("we got here");
  Promise.all([
    Hotel.find(),
    Restaurant.find(),
    Activity.find()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  });
});

module.exports = router;
