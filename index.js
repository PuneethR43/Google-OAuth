const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({msg:'express server deployment successfull'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('express server is running on port 5000')
})