require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/mongodb')
const routes = require('./routes/routes')
const passport = require('passport');
require('./db/passport')



const GoogleStrategy = require('passport-google-oauth2').Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/users/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

app.get('/protected', (req, res) => {

    res.send('authenticate user <a href="users/logout">Logout</a>')

})


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

// passport.deserializeUser(function (id, cb) {
// Retrieve the user information from your database
// ...
//     return cb(null, id);
// })




app.use('/', routes)


app.listen(8080)

