const express = require('express');
const expenseController = require('@controllers/expenseController');

const router = express.Router();

router.get('/expenses', expenseController.fetchAllExpenses);
router.post('/expense', expenseController.insertExpense);
router.put('/expense/:id', expenseController.updateExpense);
router.delete('/expense/:id', expenseController.deleteExpense);

module.exports = router;