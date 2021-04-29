const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')

const configureDB = require('./config/database')
const keys = require('./config/keys')

require('./app/models/User')
require('./app/middlewares/passport')

configureDB()

const app = express()

// ENABLING COOKIES
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./config/routes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('express server is running on port 5000')
})