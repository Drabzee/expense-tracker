const express = require('express');
require('module-alias/register');
const mainRouter = require('@routes/main');

const app = express();

app.use('/api/v1', mainRouter);

app.listen(8000, () => {
    console.log('Listening on port 8000...');
});