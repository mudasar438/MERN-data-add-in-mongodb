const express = require('express');
const router = require('./routes/route');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db')
app.use(bodyParser.json({extends: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());    
app.use('/', router);


const PORT = 8000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})