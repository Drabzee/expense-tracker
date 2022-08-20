const Expense = require("@models/Expense");

module.exports.expenseInitialState = async (req, res, next) => {
    try {
        const expenses = await Expense.find();
        
        const { totalIncome, totalExpense } = (await Expense.aggregate([
            {
                $group: {
                    _id: null,
                    totalIncome: {
                        $sum: {
                            $cond: [ { $eq: [ '$type', 'income' ] }, '$amount', 0 ]
                        }
                    },
                    totalExpense: {
                        $sum: {
                            $cond: [ { $eq: [ '$type', 'expense' ] }, '$amount', 0 ]
                        }
                    }
                }
            }
        ]))[0];

        res.status(200).json({
            status: true,
            data: {
                expenses,
                summary: { totalExpense, totalIncome }
            }
        });
    } catch(err) { next(err); }
}

module.exports.fetchAllExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json({
            status: true,
            data: expenses
        });
    } catch(err) { next(err); }
}

module.exports.insertExpense = async (req, res, next) => {
    try {
        const { title, amount, date, type } = req.body;
        const newExpense = new Expense({title, amount, date: new Date(date), type});
        await newExpense.save();

        res.status(200).json({
            status: true,
            data: newExpense
        });
    } catch(err) { next(err); }
}

module.exports.updateExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(404).json({
                status: false,
                message: 'Not a valid ID'
            });
        }
        
        const { title, amount, type, date } = req.body;
        const updatedExpense = await Expense.findByIdAndUpdate(id, { title, amount, type, date }, { new: true });

        if(!updatedExpense) {
            return res.status(404).json({
                status: false,
                message: 'Expense not found for given ID'
            });
        }

        res.status(200).json({
            status: true,
            data: updatedExpense
        });

    } catch(err) { next(err); }
}

module.exports.deleteExpense = async (req, res, next) => {
    try {
        const id = req.params.id;
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(404).json({
                status: false,
                message: 'Not a valid ID'
            });
        }
        
        const deletedExpense = await Expense.findByIdAndDelete(id);

        if(!deletedExpense) {
            return res.status(404).json({
                status: false,
                message: 'Expense not found for given ID'
            });
        }
        res.status(200).json({
            status: true,
            data: deletedExpense
        });
    } catch(err) { next(err); }
}