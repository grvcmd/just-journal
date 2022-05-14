const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topicName: String,
    date_added: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
}, {
    collection: 'topics'
});

module.exports = mongoose.model("Topic", topicSchema);