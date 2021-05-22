const mongoose = require('mongoose')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('../../config/keys')

// const User = mongoose.model('user') -> 'user' is now being assigned to variable User
const User = mongoose.model('user')
/* ALTERNATE */
// const User = require('../models/User')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
})

passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy: true
}, 
    async (accessToken, refreshToken, profile, done) => {
        console.log('profile :-', profile.displayName)
        const existingUser = await User.findOne({ googleID: profile.id })
                if(existingUser){
                    //account already exists with this ID
                    console.log('account already exists with this ID')
                    done(null, existingUser)
                }else{
                    console.log('new record created')
                    const user = await new User({
                        //no account exists with this ID create new record
                        googleID: profile.id,
                        name: profile.displayName
                    })
                    .save()
                    done(null, user)
                }
    }
))