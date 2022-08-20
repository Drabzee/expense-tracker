const { Schema, model } = require('mongoose');

const expenseSchema = Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['expense', 'income'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true });

expenseSchema.set('toJSON', {
    transform: (doc, {_id, ...result}) => {
        return {
            id: _id,
            ...result,
        };
    }
});

const Expense = model('Expense', expenseSchema);


module.exports = Expense;