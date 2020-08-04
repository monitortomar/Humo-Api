const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Humo = new Schema (
    {
        "userId": {type: String, required: true},
        'startTime': {type: String, required: true},
        'endTime': {type: String, required: true},
        'incorrectLift': {type: Number, default: 0},
        'correctLift': {type: Number, default: 0},
        'randomWalk': {type: Number, default: 0},
    },
    {timestamps: true}
)

// const Avg = new Schema (
//     {
//         'userId': {type: String, required: true},
//         'correctLiftAvg': {type: Number},
//         'incorrectLiftAvg': {type: Number},
//         'randomWalkAvg' : {type: Number}
//     }
// )
//const humo = mongoose.model('humo', Humo)
// const avg = mongoose.model('avg', Avg)
// module.exports = {
//     humo,
//     avg
// }
module.exports = mongoose.model('humo', Humo)