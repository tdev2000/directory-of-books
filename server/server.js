const express = require('express');
const cors = require('cors');
const app = express();
//Use cors middleware
const path = require('path');
const PORT = 5000;

//API call- http://localhost:5000/
app.get('/', (req, res) => {
    console.log("api call recived !");
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//


app.listen(PORT, () => {
    console.log('App is running on : ' + PORT);
});