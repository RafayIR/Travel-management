const express = require('express');
const routes = express.Router();
const userRoutes = require('../controllers/user')
const passport = require('passport');

userRoutes.use((req, res, next) => {
    next()
})


routes.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }
    ))

routes.get('/', (req, res) => {
    res.send('HELLO FROM ROUTES <a href="/users" >Log IN</a>')
})


routes.use('/users', userRoutes)

module.exports = routes;