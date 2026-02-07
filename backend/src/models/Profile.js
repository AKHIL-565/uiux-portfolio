const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    socials: {
        behance: String,
        linkedin: String,
        dribbble: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
