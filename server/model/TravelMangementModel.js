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
