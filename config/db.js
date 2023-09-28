const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('crm-flowers', 'postgres', 'vannabluerey8', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize
