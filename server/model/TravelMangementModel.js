const mongoose = require('mongoose')


const TravelSchema = new mongoose.Schema({

    name: {
        type: String
    },
})

const Travel = mongoose.model('Travel', TravelSchema)

const data = [
    { name: 'Employee' },
    { name: 'customer' },
    { name: 'ticket' },
    { name: 'manager' },
]

module.exports = Travel

// Travel.find({ name : data.name}, (err, result) => {
//     if(err) {
//         console.log(err)
//     }else if( result.length === 0) {
//         Travel.create(data , (error) => {
//             if(error) {
//                 console.log(error)
//             }else {
//                 console.log('Data save successfully')
//             }
//         });
//         console.log('Data Already Exist')
//     }
// })