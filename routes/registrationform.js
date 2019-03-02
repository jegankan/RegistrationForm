var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Listofdocform = require('../models/Listofdoc'); 
var Registrationuserform = require('../models/Registrationuserform');


router.get('/listofdoc', function(req, res, next) {
  Listofdocform.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post('/listofdoc', function(req, res, next) {
  console.log(req.body);
  Listofdocform.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET ALL BOOKS */
router.get('/listofusers', function(req, res, next) {
  Registrationuserform.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Registrationuserform.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  console.log("########################");
  console.log(req.body);
  Registrationuserform.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Registrationuserform.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Registrationuserform.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;