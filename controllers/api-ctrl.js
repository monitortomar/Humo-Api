const Humo = require('../models/api-model')

createData = (req,res) => {
    const body = req.body
    if (!body) {
        return res.statue(400).json(
            {
                success: false,
                error: 'You must send data'
            }
        )
    }
    const humo = new Humo(body)
    if (!humo) {
        return res.status(400).json({success: false, error: err})
    }

    humo
        .save()
        .then( () => {
            return res.status(200).json(
                {
                    success: true,
                    id: humo._id,
                    message: 'Data created'
                }
            )
        })
        .catch((e) => {
            return res.status(400).json(
                {
                    status: false,
                    error: e
                }
            )
        })
    
}


deleteData = async (req,res) => {
    await Humo.findOneAndDelete({'_id':req.params.id}, (err, humo) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!humo) {
            return res.status(400).json({success: false, error: 'Data not found'})
        }

        return res.status(200).json({success: true, data: humo})
    })
    .catch(err => console.log(err))
}

getData = async (req,res) =>{
    await Humo.find({'userId': req.params.user_id},(err,humo) => {
        if(err){
            return res.status(400).json({success: false, error: err})
        }
        if (!(humo.length)) {
            return res.status(400).json({success: false, error: 'No data found'})
        }

        return res.status(200).json({success: true, data: humo})
    })
    .catch(err => console.log(err))
}

getDataById = async (req, res) =>{
    console.log(req.params)
    if (req.params.user_id === 'latest') {
        await Humo.find({'userId': req.params.id}, {}, {sort:{'createdAt':-1}}, (err, humo) => {
            console.log(humo)
            if(err){
                return res.status(400).json({success: false, error: err})
            }
            if (!(humo.length)) {
                return res.status(400).json({success: false, error: 'No data found'})
            }
            return res.status(200).json({success: true, data: humo[0]})
        })
        .catch(err => console.log(err))
    }else{
        await Humo.findOne({$and:[{'userId': req.params.user_id},{'_id': req.params.id}]}, (err,humo) => {
            if (err) {
                return res.status(400).json({success: false, error:err})
            }
    
            if (!humo) {
                return res.status(400).json({success: false, error: 'Data not found'})
            }
    
            return res.status(200).json({success: true, data: humo})
        })
        .catch(err => console.log(err))
    }
    
}



module.exports = {
    createData,
    deleteData,
    getData,
    getDataById
}