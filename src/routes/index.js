const express = require('express');
const expenseRouter = require('@routes/expenseRoutes');

const router = express.Router();

router.use('/', expenseRouter);

router.use('*', (req, res) => {
    res.status(404).json({
        status: false,
        message: 'Page not found!'
    });
});

module.exports = router;