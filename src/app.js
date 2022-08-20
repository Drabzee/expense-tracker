require('module-alias/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('@routes');
const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();

app.use(morgan('combined'));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
}

app.use('/api/v1', router);

if(process.env.NODE_ENV === 'production') {
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(process.env.NODE_ENV === 'production' ? {
        status: false,
        message: err.toString()
    }: `<pre>${err.stack}</pre>`);
});

const MONGO_CONNECT_URI = `mongodb://root:${process.env.MONGODB_ADMIN_PWD}@mongodb:27017/expense_tracker?authMechanism=SCRAM-SHA-256&authSource=admin`;
mongoose.connect(MONGO_CONNECT_URI).then(() => {
    console.log('Mongodb database connected...');
    return app.listen(8000);
}).then(() => {
    console.log('Listening on port 8000...');
});