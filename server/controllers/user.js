const { query } = require('express');
const express = require('express');
const session = require('express-session');
const userRoutes = express.Router();
const passport = require('passport');
const Travel = require('../model/TravelMangementModel')


userRoutes.use(session({ secret: 'cats', resave: true, saveUninitialized: false }));
userRoutes.use(passport.initialize());
userRoutes.use(passport.session());


userRoutes.get('/', (req, res) => {
    res.send('HEllo from User')
})

checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) { return next() }
    res.redirect('/users/auth/google/')
}

userRoutes.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }
    ))

userRoutes.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/users/auth/google/'
    }), (req, res) => {
        const query = `?email=${req.user.emails[0].value}&name=${req.user.displayName}`;
        res.redirect('http://localhost:3000/dashboard' + query);
    }
);


userRoutes.get('/dashboard', async (req, res) => {
    // console.log(req)
    if (req.isAuthenticated()) {
        console.log(req.user);
        const travel = await Travel.find({});
        res.send(travel)
    } else {
        console.log("not auth")
        res.send(req.user)
    }
})




module.exports = userRoutes;