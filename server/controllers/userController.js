var bcrypt = require('bcryptjs')
var { validationResult } = require('express-validator')

const userModel = require('../models/user')

exports.signUp = (req, res, next) => {
  let valErrors = validationResult(req)
  if (!valErrors.isEmpty()) {
    res.status(400).send(errors)
  } else {
    userModel.findOne({ email: req.body.email }, (err, user) => {
      if (user) {
        res.status(400).send('Email already in use')
      } else if (req.body.password != req.body.confirmPassword) {
        res.status(400).send('Confirmation password does not match')
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err)
          }

          let newUser = new userModel({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
          })

          newUser.save((err) => {
            if (err) {
              console.log(err)
            }
            res.sendStatus(200)
          })
        })
      }
    })
  }
}

