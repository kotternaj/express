const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    user: {
        type: String,
        required: true        
    },
    objectId: {
        type: String, 
        required: true
    },
    
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;