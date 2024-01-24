const {Socials} = require('../models/index')

class SocialService {
    constructor(repo) {
        this.repo = repo
    }

    async getAll() {
        return await this.repo.findAll()
    }

    async create(phones) {
        await this.repo.truncate()
        return await this.repo.bulkCreate(phones)
    }
}

module.exports = new SocialService(Socials)