
const jwt = require('jsonwebtoken')
const Model = require('../models/index')

class TokenService {
    constructor(tokenModel) {
        this.tokenModel = tokenModel
    }

    // генерация токенов
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, 'secretaccess', {expiresIn: '1h'})
        const refreshToken = jwt.sign(payload, 'secretrefresh', {expiresIn: '1h'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        return jwt.verify(token, 'secretaccess', )
    }

    validateRefreshToken(token) {
        return jwt.verify(token, 'secretrefresh', )
    }

    // поиск токена в базе данных
    async findToken(refreshToken) {
        return await this.tokenModel.findOne({where: {refreshToken}})
    }


    // сохранение токена для юзера
    async saveToken(data) {
        try {
            const [token, created] = await this.tokenModel.findOrCreate({
                where: {userId: data.userId},
                defaults: {userId: data.userId, refreshToken: data.token}
            })

            if(created) {
                return token
            }

            token.refreshToken = data.token

            await token.save()

            return  token
        } catch (e) {

        }
    }

    async getAll() {
        return await this.tokenModel.findAll()
    }
}

module.exports = new TokenService(Model.Tokens)