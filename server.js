const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

//morgan dev tool
app.use(morgan("dev"));

//set up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// "mongodb://markyounan:password1@ds159527.mlab.com:59527/heroku_pm8s505z"
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://markyounan:password1@ds159527.mlab.com:59527/heroku_pm8s505z';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// '/' automatically prepended
app.use(routes);
app.listen(PORT, function () {
  console.log(`App listening on Port: ${PORT}`);
});








// const express = require('express');
// const mongoose = require('mongoose');
// const logger = require('morgan');
// const routes = require('./routes');
// //set up PORT for server
// const PORT = process.env.PORT || 3001;
// const app = express();
// //middlewares
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// //routes used
// app.use(routes);
// //require('./services/passport');
// //'mongodb://adrom:Password1@ds161539.mlab.com:61539/heroku_g9s19wz1'
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workouts';
// mongoose
//   .connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   try {
//     app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
//   } catch (e) {
//     return console.log(e);
//   }
//   // .then(() => console.log('MongoDb Connected...'))
//   // .catch(err => console.log(err));
