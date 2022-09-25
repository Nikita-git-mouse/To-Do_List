const {DeathNote, Memo} = require('../models/models')
const ApiError = require('../error/ApiError')

class NoteController{
    async create(req, res, next){
        try{
        let {userId,name} = req.body
        if (!userId || !name){
            next(ApiError.badRequest("Укажи параметры, сука"))
        }
        const note = await DeathNote.create({userId, name})
        return res.json(note)
    }
    catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        let {userId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page* limit - limit
        let notes
        if (!userId){
            notes = await DeathNote.findAndCountAll({limit, offset})
        }
        if (userId){
            notes = await DeathNote.findAndCountAll({where:{userId}, limit, offset})
        }
        //const notes = await DeathNote.findAll()
        return res.json(notes)
    }
    async getOne(res, req){
        const {id} = req.params
        const note = await DeathNote.findOne(
            {
                where: {id}
            }
        )
        return res.json(note)
    }
}

module.exports = new NoteController()

