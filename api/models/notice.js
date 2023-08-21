const mongoose = require('mongoose');

const createSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    desc: {
        type: String,
        required: true 
    },
    url: {
        type: String,
        required: true 
    },
},
{
    timestamps: true
});


module.exports = mongoose.model("Create",createSchema);

