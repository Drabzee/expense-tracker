const express = require('express');
require('module-alias/register');
const morgan = require('morgan');
const mainRouter = require('@routes/main');
// require('asdf');

const app = express();

app.use(morgan('combined'));

app.use('/api/v1', mainRouter);

app.use('*', (req, res) => {
    res.status(404).json({
        status: false,
        message: 'Page not found!'
    });
});

app.use((err, req, res) => {
    console.log(err.stack);
    res.status(500).send({
        status: false,
        message: err.toString()
    });
});

app.listen(8000, () => {
    console.log('Listening on port 8000...');
});