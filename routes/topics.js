const express = require('express');
const router = express.Router();

// Import the topic model
const TopicModel = require('./../models/topic');

// Get all topics
router.get('/', (req, res, next) => {
    console.log('currently in /topics')

    TopicModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get topic by topicName
router.get('/:topicName', (req, res, next) => {
    console.log(`Getting ${req.params.topicName} topic.`)

    TopicModel.findOne({topicName: req.params.topicName}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Topic not found.')
        } else {
            res.json(data)
        }
    })
});

// Create topic
router.post('/', (req, res, next) => {
    TopicModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Topic was added to the database')
        }
    })
});

// Delete topic
router.delete('/:topicName', (req, res, next) => {
    TopicModel.findOneAndRemove({topicName: req.params.topicName}, (error, data) => {
        if (error) {
            return next (error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;