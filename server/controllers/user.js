const express = require('express');
const session = require('express-session');
const userRoutes = express.Router();
const passport = require('passport');
const Travel = require('../model/TravelMangementModel')

userRoutes.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); // dont forget this
  });


userRoutes.use(session({ secret: 'cats', resave: true, saveUninitialized:false }));
userRoutes.use(passport.initialize());
userRoutes.use(passport.session());


userRoutes.get('/', (req, res) => {
    res.send('HEllo from User')
})

userRoutes.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }
    ))

userRoutes.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:3000/dashboard',
        failureRedirect: '/auth/google/'
    })
);

checkAuthenticated = (req , res, next) => {
    if(req.isAuthenticated()) {return next()}
    res.redirect('/users/auth/google/')
} 


userRoutes.get('/dashboard' ,checkAuthenticated,async (req, res) => {
    const travelMode = await Travel.find({})

    try {
        res.send('helo', travelMode)
    } catch(err) {
        res.send(500).send(err)
    }
})




userRoutes.get('/logout', (req, res) => {

    req.session.destroy();
    res.redirect('/');
});



module.exports = userRoutes;