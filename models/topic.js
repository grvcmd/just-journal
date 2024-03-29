const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topicName: String,
    date_added: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    topicID: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    collection: 'topics',
    versionKey: false
});

module.exports = mongoose.model("Topic", topicSchema);