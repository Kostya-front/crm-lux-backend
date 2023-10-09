
const Model = require('../models/index')

class AdvantagesService {
    constructor(advantagesService) {
        this.advantagesService = advantagesService
    }

    async getAll() {
        return await this.advantagesService.findAll()  //select * from categories
    }

    async create(advantage) {
        return await this.advantagesService.create({...advantage})
    }

    async update(id, advantage) {
        return await this.advantagesService.update({...advantage}, {where: {id}})
    }

    async deleteOne(id) {
        return await this.advantagesService.destroy({where: {id}})
    }
}

module.exports = new AdvantagesService(Model.Advantages)