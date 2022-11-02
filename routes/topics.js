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

// endpoint to get all topics that contain the given topicName
router.get('/:topicName', (req, res, next) => {
    console.log("Finding topics...")
    // regex: return anything that matches the entryName
    TopicModel.find({topicName: new RegExp(req.params.topicName, 'gi')}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Topic not found')
        } else {
            res.json(data)
        }
    })
})


//endpoint to get a topic by it's topicID
router.get ('/id/:topicID', (req, res, next) => {
    console.log(`Getting topic with topicID of ${req.params.topicID}`)

    TopicModel.findOne ({ topicID: req.params.topicID}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Topic not found')
        } else {
            res.json(data)
        }
    })
})

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
router.delete('/id/:topicID', (req, res, next) => {
    TopicModel.findOneAndRemove({topicID: req.params.topicID}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

// Update topic
router.put('/id/:topicID', (req, res, next) => {
    TopicModel.findOneAndUpdate({topicID: req.params.topicID}, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Topic was updated.')
            console.log('Topic updated successfully.', data)
        }
    })
});

// TODO: aggregation endpoint to get all entries under a certain topic using the topic's topicID
router.get('/topic-entry/:topicID', (req, res, next) => {
    console.log(`Trying to find all entries under topic w/ topicID: ${req.params.topicID}`)
    TopicModel.aggregate([
        /*
        Must cast req.params.topicID to a Number type
        bc req.params.topicID default datatype is String
        */
        { $match: {topicID: Number(req.params.topicID)}},
        { $project: { _id: 1, topicName: 1, topicID: 1} },
        { $lookup: {
            from: 'entries',
            localField: 'topicID',
            foreignField: 'topicID',
            as: `Entries`
        }},
    ], (error, data) => {
        if (error) {
            return next(error)
        }
        else {
            res.json(data)
        }
    })
});

module.exports = router;