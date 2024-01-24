

const phoneService = require('./phoneService')

class PhoneController {
    constructor(service) {
        this.service = service
    }

    async getAll(req, res) {
        const phones = await this.service.getAll()
        res.json(phones)
    }

    async create(req,res) {
        const {phones} = req.body
        const createdPhones = await this.service.create(phones)
        res.json(createdPhones)
    }
}

module.exports = new PhoneController(phoneService)