const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    entryName: {
        type: String,
        required: true
    },
    topicName: String,
    text: String,
    date_added: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    topicID: {
        type: Number,
        required: true
    },
    entryID: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    collection: 'entries',
    versionKey: false
});

module.exports = mongoose.model("Entry", entrySchema);