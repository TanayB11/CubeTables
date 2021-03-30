var express = require('express');
var router = express.Router();

var { body } = require('express-validator')
var passport = require('passport')

const { authMiddleware } = require('../middlewares/authMiddleware')
const userController = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.post('/api/signup', [
    body('email').isString().notEmpty().trim().escape().isEmail(),
    body('firstName').isString().notEmpty().trim().escape(),
    body('lastName').isString().notEmpty().trim().escape(),
    body('password').isString().notEmpty().trim().escape(),
    body('confirmPassword').isString().notEmpty().trim().escape(),
  ], userController.signUp)

router.post('/api/signin', passport.authenticate('local'), (req, res, next) => {
  res.send(req.user)
})

router.post('/api/signout', authMiddleware, (req, res, next) => {
  req.logout()
  res.sendStatus(200)
})

router.get('/api/user', authMiddleware, (req, res, next) => {
  res.send(req.user)
})

module.exports = router;
