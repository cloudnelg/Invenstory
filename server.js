const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001; 
const app = express();
const { ensureAuthenticated } = require('./config/auth');




//Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Connecting to Mongo using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appliances", { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// express session 
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

//Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

  // Use Routes
app.use('/api/appliances', require('./routes/api/appliances'));
app.use('/api/furniture', require('./routes/api/furniture'));
app.use('/api/entertainment', require('./routes/api/entertainment'));
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

//....................................................................................................................AWS
const upload = require('./fileUploadAppliances');
const singleUpload = upload.single('image')

app.post('/image-upload-appliance', function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

const upload2 = require('./fileUploadFurniture');
const singleUpload2 = upload2.single('image')

app.post('/image-upload-furniture', function(req, res) {
  singleUpload2(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})

const upload3 = require('./fileUploadEntertainment');
const singleUpload3 = upload3.single('image')

app.post('/image-upload-entertainment', function(req, res) {
  singleUpload3(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})
//......................................................................................................................AWS End



// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }

//passport config
require('./config/passport')(passport);

//dotenv config
require('dotenv').config();

// console.log(path.join(__dirname, "./views/welcome.ejs"))
// Send every request to the React app
// Define any API routes before this runs
app.get("/login", function(req, res) {
  res.render(path.join(__dirname, "./views/welcome.ejs"));
});
app.get("/register", function(req, res) {
  res.render(path.join(__dirname, "./views/register.ejs"));
});

app.listen(PORT, console.log (`Server started on port ${PORT}`));

