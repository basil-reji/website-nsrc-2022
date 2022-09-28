var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NSRC 2022', home_page: true });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Team | NSRC 2022', team_page: true  });
});

router.get('/venue', function(req, res, next) {
  res.render('venue', { title: 'Venue| NSRC 2022',  venue_page: true });
});

// router.get('/register', function(req, res, next) {
//   res.render('register', { title: 'Register | NSRC 2022',  venue_page: true });
// });

module.exports = router;
