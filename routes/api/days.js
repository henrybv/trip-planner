var express = require('express');
var router = express.Router();
var models = require('../../models');
var mongoose = require('mongoose');
var Day = models.Day;
// var Promise = require('bluebird');
mongoose.Promise = require('bluebird');

// router.use('/', function(req, res, next){
//   Day.find().then(function(days){
//     res.send(days);
//   });
// }); // testing route

// router.use('/:dayNumber', function(req, res, next){
//   res.send('here you are');
// });

router.get('/:dayNumber', function(req, res, next){
  var dayNumber = req.params.dayNumber;
  // Day.findOne({number: dayNumber}).then(function(day){
  //   console.log(day);
  //   res.send(day);
  // });
  res.send('youre looking for a day');
  // should be a res.render();
});

router.post('/:dayNumber/restaurants', function(req, res, next){
    console.log("INSIDE POST RESTAURANTS", req.body);
  Day.find({number: req.params.dayNumber}).then(function(day){
    day.restaurant.push(req.body);
    res.send('fdsafdsafdsa');
  });
});

router.post('/:dayNumber', function(req, res, next){
  var dayNumber = req.params.dayNumber;
  // this simply creates a new day with number "dayNumber"
  var newDay = new Day({number: dayNumber}).save().then(function(day){

  });
  // res.send("new day has potentially been created"); 
  // this isn't what we should be doing though...
  // we need to send confirmation and update the DOM node
});

router.get('/listOfDays', function(req, res, next){
  Day.find().then(function(days){
    res.send(days);
  });
});

router.delete('/:dayNumber', function(req, res, next){
  var dayNumber = req.params.dayNumber;
  
});

module.exports = router;