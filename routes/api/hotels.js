var express = require('express');
var router = express.Router();
var models = require('../../models');
var Hotel = models.Hotel;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
    Hotel.find().then(function(hotels) {
        res.send(hotels);
    })
    .catch(next);
});

module.exports = router;