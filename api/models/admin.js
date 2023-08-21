const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }

});

module.exports = mongoose.model("Register",registerSchema);
