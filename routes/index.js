var express = require('express');
var router = express.Router();
var backgroundController = require('../controllers/backgrounds-controller');

/* GET home page. */
router.get('/', function(req, res) {
  backgroundController.retrieveBackgrounds(function(err, backgrounds) {
    if (err) {
      res.render('index', {
        backgrounds: ['../public/images/backgrounds/1.jpg']
      });
    } else {
      res.render('index', {
        backgrounds: backgrounds
      });
    }
  });
});

module.exports = router;
