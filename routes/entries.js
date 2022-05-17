const express = require('express');
const router = express.Router();

// Import the entry model
const EntryModel = require('./../models/entry');

// Get all entries
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

// TODO: Get entry by entry name using regex
// Might DELETE this...
router.get('/:entryName', (req, res, next) => {
    console.log("Finding entry...")

    EntryModel.findOne({entryName: {$regex: req.params.entryName}}, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Entry not found')
        } else {
            res.json(data)
        }
    })
});

// TODO: Get all entries under a certain topic


// TODO: Get all entries within a date range


// Create entry
router.post('/', (req, res, next) => {
    EntryModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Entry was added to the database.')
        }
    })
});

// Delete entry
router.delete('/:entryName', (req, res, next) => {
    EntryModel.findOneAndRemove({entryName: req.params.entryName}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

// Update entry
router.put('/:entryName', (req, res, next) => {
    EntryModel.findOneAndUpdate({entryName: req.params.entryName}, {$set: req.body}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.send('Entry was updated.')
            console.log('Entry updated successfully', data)
        }
    })
});

module.exports = router;