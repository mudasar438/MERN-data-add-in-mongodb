const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:root@cluster0.j0iehr9.mongodb.net/newData?retryWrites=true&w=majority").then(()=>{
    console.log("connectrd to the database");
}).catch(err =>{
    console.log('err', err)
})



