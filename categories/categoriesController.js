
const categoriesService = require('./categoriesService')

class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService
    }

    async getAll(req, res) {
        try {
            const categories = await this.categoriesService.getAll()
            res.json(categories)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async create(req, res) {
        const {title, url} = req.body
        const category = await this.categoriesService.create({title, url})
        res.json(category)
    }

    async update(req, res) {
        const {id} = req.params
        const {title, url} = req.body
        const category = await this.categoriesService.update(id, {title, url})
        res.json(category)
    }

    async deleteOne(req, res) {
        const {id} = req.params
        const deletedCategory = await this.categoriesService.deleteOne(id)
        res.json(deletedCategory)
    }
}

module.exports = new CategoriesController(categoriesService)