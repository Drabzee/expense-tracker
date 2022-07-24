const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Hello, World'
    });
});

router.use('*', (req, res) => {
    res.status(404).json({
        status: false,
        message: 'Page not found!'
    });
});

module.exports = router;