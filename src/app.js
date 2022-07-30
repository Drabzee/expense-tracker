require('module-alias/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('@routes');

const app = express();

app.use(morgan('combined'));

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
    console.log(res);
    console.log(err.stack);
    res.status(500).send({
        status: false,
        message: err.toString()
    });
});

app.listen(8000, () => {
    console.log('Listening on port 8000...');
});