var express = require('express');
var router = express.Router();
var models = require('../../models');
var Restaurant = models.Restaurant;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
    Restaurant.find().then(function(restaurants) {
        res.send(restaurants);
    });
});

module.exports = router;
