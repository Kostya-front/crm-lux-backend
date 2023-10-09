
const advantageService = require('./advantageService')

class AdvantagesController{
    constructor(advantageService) {
        this.advantageService = advantageService
    }

    async getAll(req, res) {
        try {
            const advantages = await this.advantageService.getAll()
            res.json(advantages)
        } catch (e) {
            res.status(500).send({message: e.message})
        }
    }

    async create(req, res) {
        const {title, description, url} = req.body

        try {
            if(!title || !url) {
                throw new Error("Все поля должны быть заполнены")
            }

            if(title.length <= 3) {
                throw new Error("Название категории должно содержать более 3 символов")
            }

            if(!/(http|https):\/\//.test(url)) {
                throw new Error("Url картинки должен быть валидным")
            }

            const advantage = await this.advantageService.create({title, description, url})
            res.json(advantage)

        } catch (e) {
            if(e instanceof SyntaxError) {
                res.status(500).send({message: e.message})
            }
            else {
                res.status(400).send({message: e.message})
            }
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            const {title, description, url} = req.body
            const advantage = await this.advantageService.update(id, {title, description, url})
            res.json(advantage)
        } catch (e) {
            if(e instanceof SyntaxError) {
                res.status(500).send({message: e.message})
            }
            else {
                res.status(400).send({message: e.message})
            }
        }
    }

    async deleteOne(req, res) {
        try {
            const {id} = req.params
            const deletedAdvantage = await this.advantageService.deleteOne(id)
            res.json(deletedAdvantage)
        } catch(e) {
            res.status(500).send({message: e.message})
        }
    }
}

module.exports = new AdvantagesController(advantageService)