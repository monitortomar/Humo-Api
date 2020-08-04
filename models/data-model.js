const Ctrl = require('./api-model')

createFeed = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.statue(400).json(
            {
                success: false,
                error: 'You must send data'
            }
        )
    }
    await Ctrl.avg.findOne({'userId': humo.userId}, (err, avg) => {
        if(err){
            return res.status(400).json({success: false, error: err})
        }
        if (!avg) {
            const avgFeed = {
                'userId': body.userId,
                'correctLiftAvg': body.correctLift ? body.correctLift : 0,
                'incorrectLifyAvg': body.incorrectLift ? body.incorrectLift: 0,
                'randomWalkAvg': body.randomWalk ? body.randomWalk : 0
            }
            const avg = Ctrl.avg(avgFeed);
            if (!avg) {
                return res.status(400).json({success: false, error: err})
            }
            avg
                .save()
                .then( async () => {
                    
                })
        }
    })
    const humo = new Ctrl.humo(body)
    if (!humo) {
        return res.status(400).json({success: false, error: err})
    }

    humo
        .save()
        .then( () => {
            console.log('function')
            async function updateFeed() {
                
            }
            updateFeed();
            // return res.status(200).json(
            //     {
            //         success: true,
            //         id: humo._id,
            //         message: 'Data created'
            //     }
            // )
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