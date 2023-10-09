const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')


const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING}
})

const Phones = sequelize.define('phones', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    phone: {type: DataTypes.STRING}
})

const Advantages = sequelize.define('advantages', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING} 
})

module.exports = {
    Categories,
    Advantages
}
