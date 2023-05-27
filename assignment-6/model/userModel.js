const mongoose = require('mongoose');
const createData = new mongoose.Schema({
    topic: String,
    description:String,
    posted_at:String,
    posted_by:String
    
});
module.exports = mongoose.model('collection1',createData);
