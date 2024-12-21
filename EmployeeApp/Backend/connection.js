var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://navyalakshmi306:Navyalakshmi003@cluster0.gomx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
})