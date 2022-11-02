/*
All routes related to entries
*/

const express = require('express');
//Router lets us create views with the same
//functionality as app.get()
const router = express.Router();

// Import the entry model
const EntryModel = require('./../models/entry');

/*
EntryModel and all other models use mongoose queries.
*/

// endpoint to get all entries from the API
router.get('/', (req, res, next) => {
    console.log('currently in /entries')

    EntryModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// endpoint to get entry with given entryID
router.get('/id/:entryID', (req, res, next) => {
    console.log(`Getting entry with entryID: ${req.params.entryID}`)

    EntryModel.findOne({ entryID: req.params.entryID }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(400).send('Topic not found')
        } else {
            res.json(data)
        }
    })
})

// endpoint to get all entries that contain the given entryName
router.get('/:entryName', (req, res, next) => {
    console.log("Finding entries...")
    // regex: return anything that matches the entryName
    EntryModel.find({entryName: new RegExp(req.params.entryName, 'gi')}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Entry not found')
        } else {
            res.json(data)
        }
    })
})

// TODO: Get all entries within a date range


// endpoint to create entry
router.post('/', (req, res, next) => {
    EntryModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Entry was added to the database.')
        }
    })
});

// endpoing to delete entry (find by entryID)
router.delete('/id/:entryID', (req, res, next) => {
    EntryModel.findOneAndRemove({entryID: req.params.entryID}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

// endpoint to update entry (found by entryID)
router.put('/id/:entryID', (req, res, next) => {
    EntryModel.findOneAndUpdate({entryID: req.params.entryID}, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Entry was updated.')
            console.log('Entry updated successfully', data)
        }
    })
});

module.exports = router;