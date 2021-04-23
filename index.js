const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({msg:'express server running'})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('express server running is running on port 5000')
})