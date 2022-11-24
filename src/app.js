const express = require('express');

const usersRouter = require('./users/users.router');

const port = 6000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.use('/api/v1', usersRouter);

app.listen(port, () => {
    console.log('Running on port ' + port);
});