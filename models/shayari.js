const mongoose = require("mongoose");

const shayari = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },

    content: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Shayari", shayari);
