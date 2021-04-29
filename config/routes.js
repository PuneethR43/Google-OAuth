const passport = require('passport')

module.exports = app => {
    // AUTHENTICATE REQUEST(LOGIN)
    app.get( 
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        }) 
    )

    // REQUEST IS SENT TO GOOGLE WITH THE CODE FROM URL WHICH WAS GIVEN BY GOOGLE AND EXCHANGES THE CODE WITH THE USER's PROFILE
    app.get('/auth/google/callback', passport.authenticate('google'))
    
    // LOG-OUT
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send(req.user)
        console.log('cur user', req.user)
    })

    // SHOW LOGGED-IN USER
    app.get('/api/cur_user', (req, res) => {
        res.send(req.user)
        console.log('cur user',req.user)
    })
}