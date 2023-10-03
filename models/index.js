const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')


const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING}
})

module.exports = {
    Categories,
}
