const uuid = require('uuid')
const path = require('path');
const {Item} = require('../models/models')
const ApiError = require('../error/ApiError');

class ItemController {
    async create(req, res) {
        let {name, price, descrOne, descrTwo} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const item = await Item.create({name, price, img: fileName, descrOne, descrTwo});
        return res.json(item)
    }

    async getAll(req, res) {
        let {_limit, _page, name,searchName, price} = req.query
        _page = _page || 1
        _limit = _limit || 100
        let offset = _page * _limit - _limit
        let items;
        items = await Item.findAndCountAll({limit: _limit, offset,})
        return res.json(items)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: {id},
            },
        )
        return res.json(item)
    }

    async update (req, res){
        const {id} = req.params
        let {
            name, price, descrOne, descrTwo
        } = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const item = await Item.update({name, price, img: fileName, descrOne, descrTwo}, {where:{id}});
        return res.json(item)
    }

    async delete(req, res){
        const {id} = req.params
        const item = await Item.destroy(
            {
                where : {id}
            },
        )
        return res.json(item)
    }


}

module.exports = new ItemController()
