const express = require('express')
const cors = require('cors')
const app = express()
const sequelize = require('./config/db')
const router = require('./routes')
const bodyParser = require('body-parser');


app.use(express.json())
app.use(cors())
app.use('/', router)

async function start() {
    await sequelize.sync({force: true}).then(() => console.log('DB is running')).catch((e) => console.log(e))
    app.listen(3000, () => {
        console.log('Server is running')
    })
}

start()