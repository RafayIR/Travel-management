require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/mongodb')
const routes = require('./routes/routes')
const cors = require('cors');

require('./db/passport')

app.use(cors())

app.use('/', routes)


app.listen(8080)

