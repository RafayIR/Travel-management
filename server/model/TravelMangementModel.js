const mongoose = require('mongoose')
const TravelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    travelMeans: {
        type: String
    }

})

const Travel = mongoose.model('Travel', TravelSchema)

const data = [
    { name: 'Employee', travelMeans: 'By Car' },
    { name: 'customer', travelMeans: 'By Ship' },
    { name: 'guest', travelMeans: 'By Plane' },
    { name: 'manager', travelMeans: 'By Train' },
]

module.exports = Travel
