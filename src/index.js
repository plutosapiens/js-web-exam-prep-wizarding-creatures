//ENTRY
const express = require('express');
const path = require('path');
const { PORT } = require('./constants')

//Init
const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello home page! :)');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
