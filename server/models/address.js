const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = new Schema ({
    first: {
        type: String,
        required: true,
        minlength: [1, "You must enter a first name"],
    },
    last: {
        type: String,
        required: true,
        minlength: [1, "You must enter a last name"],
        },
    address: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false,
        maxlength: 2
    },
    zip: {
        type: Number,
        required: false,
        maxlength: 5
    },
    phone: {
        type: Number,
        required: false,
        maxlength: 10
    },
    email: {
        type: String,
        required: false
    },
    bday: {
        type: Date,
        required: false
    },
    twitter: {
        type: String,
        required: false
    }

 }, {timestamps: true})

 module.exports = mongoose.model('Address', AddressSchema)
