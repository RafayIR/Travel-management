const express = require('express');
const session = require('express-session');
const userRoutes = express.Router();
const passport = require('passport');


userRoutes.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
userRoutes.use(passport.initialize());
userRoutes.use(passport.session());


userRoutes.get('/', (req, res) => {
    res.send('<a href="/users/auth/google">Authenticate With google </a>')
})



userRoutes.get('/auth/google/callback',

    passport.authenticate('google', {

        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);



userRoutes.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }
    ))




userRoutes.get('/logout', (req, res) => {

    req.session.destroy();
    res.redirect('/');
});



module.exports = userRoutes;