const {Memo} = require('../models/models')
const ApiError = require('../error/ApiError')

class MemoController{
    async create(req, res, next){
        try{
        let {deathNoteId,name} = req.body
        if (!deathNoteId || !name){
            next(ApiError.badRequest("Укажи параметры, сука"))
        }
        const memo = await Memo.create({deathNoteId, name})
        return res.json(memo)
    } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {deathNoteId, limit, page} = req.query
        page = page || 1
        limit = limit || 2
        let offset = page * limit - limit
        let mems
        if (!deathNoteId){
            mems = await Memo.findAndCountAll({limit, offset})
        }
        if (deathNoteId){
            mems = await Memo.findAndCountAll({where:{deathNoteId}, limit, offset})
        }
        //const mems = await Memo.findAll()
        return res.json(mems)
    }
}

module.exports = new MemoController()