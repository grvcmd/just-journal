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

module.exports = router;