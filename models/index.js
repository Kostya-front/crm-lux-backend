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

const Socials = sequelize.define('socials', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    urlImage: {type: DataTypes.STRING},
    urlSocial: {type: DataTypes.STRING}
})

const Advantages = sequelize.define('advantages', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, unique: true},
    description: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING} 
})

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, unique: true },
    nickname: {type: DataTypes.STRING, unique: true },
    password: {type: DataTypes.STRING}
})

const Tokens = sequelize.define('tokens', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, unique: true},
    userId: {type: DataTypes.INTEGER},
})

Users.hasOne(Tokens, {foreignKey: 'userId'})
Tokens.belongsTo(Users, {foreignKey: 'userId'})
module.exports = {
    Categories,
    Advantages,
    Users,
    Tokens,
    Phones,
    Socials
}
