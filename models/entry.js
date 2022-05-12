const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    topic: String,
    text: String,
    date_added: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
}, {
    collection: 'entries'
});

module.exports = mongoose.model("Entry", entrySchema);