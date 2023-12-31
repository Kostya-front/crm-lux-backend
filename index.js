const express = require('express')
const cors = require('cors')
const app = express()
const sequelize = require('./config/db')
const router = require('./routes')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOptions))
app.use('/', router)

async function start() {
    await sequelize.sync().then(() => console.log('DB is running')).catch((e) => console.log(e))
    app.listen(3001, () => {
        console.log('Server is running')
    })
}

start()