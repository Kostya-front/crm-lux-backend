
const Model = require('../models/index')

class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel
    }

    async getAll() {
        return await this.categoryModel.findAll()  //select * from categories
    }

    async create(category) {
        return await this.categoryModel.create({...category})
    }

    async update(id, category) {
        return await this.categoryModel.update({...category}, {where: {id}})
    }

    async deleteOne(id) {
        return await this.categoryModel.destroy({where: {id}})
    }
}

module.exports = new CategoriesService(Model.Categories)