const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-comm").then(()=>{
    console.log("connectrd to the database");
}).catch(err =>{
    console.log('err', err)
})
