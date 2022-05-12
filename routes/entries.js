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
})

module.exports = router;