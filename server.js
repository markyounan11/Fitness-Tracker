const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
//morgan dev tool
app.use(morgan("dev"));
//set up middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology: true
});
// '/' automatically prepended
app.use( routes );
app.listen(PORT,function(){ 
    console.log(`App listening on Port: ${PORT}`);
});