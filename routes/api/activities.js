var express = require('express');
var router = express.Router();
var models = require('../../models');
var Activity = models.Activity;
var Promise = require('bluebird');

router.get('/', function(req, res, next) {
    Activity.find().then(function(activities) {
        res.send(activities);
    });
});

module.exports = router;