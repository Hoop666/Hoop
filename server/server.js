// --- Imports
const path = require('path');
const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
const app = express();

// --- Settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(`${__dirname}/../build`));


app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../build/index.html`));
})




// --- Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server online on port ${app.get('port')}`);
})