
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
            res.status(500).send({message: e.message})
        }
    }

    async create(req, res) {
        const {title, url} = req.body

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

            const category = await this.categoriesService.create({title, url})
            res.json(category)

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
            const {title, url} = req.body
            const category = await this.categoriesService.update(id, {title, url})
            res.json(category)
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
            const deletedCategory = await this.categoriesService.deleteOne(id)
            res.json(deletedCategory)
        } catch(e) {
            res.status(500).send({message: e.message})
        }
    }
}

module.exports = new CategoriesController(categoriesService)