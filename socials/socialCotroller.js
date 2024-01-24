

const socialService = require('./socialService')

class SocialController {
    constructor(service) {
        this.service = service
    }

    async getAll(req, res) {
        const socials = await this.service.getAll()
        res.json(socials)
    }

    async create(req,res) {
        const {socials} = req.body
        const createdSocials = await this.service.create(socials)
        res.json(createdSocials)
    }
}

module.exports = new SocialController(socialService)