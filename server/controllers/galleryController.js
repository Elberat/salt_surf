const {Gallery} = require('../models/models')
const uuid = require('uuid')
const path = require('path');

class GalleryController {
    async create(req, res) {
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const gallery = await Gallery.create({ img: fileName,});
        return res.json(gallery)
    }

    async getAll(req, res) {
        
        let {_limit, _page} = req.query
        _page = _page || 1
        _limit = _limit || 200
        let offset = _page * _limit - _limit
        const gallery = await Gallery.findAndCountAll({limit: _limit, offset})
        return res.json(gallery)
    }

    async delete(req, res){
        const {id} = req.params
        const gallery = await Gallery.destroy(
            {
                where: {id},
            },
        )
        return res.json(gallery)
    }

}

module.exports = new GalleryController()
