const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const path = require("path");
const app = express();
const AWS = require('aws-sdk');
const upload = require('./fileUpload');


//passport config
require('./config/passport')(passport);


//DB config
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appliances", { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

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

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


//Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

const singleUpload = upload.single('image')

// Define POST route
app.post('/image-upload', function(req, res) {
  singleUpload(req, res, function(err, some) {
    console.log('in post image', err)
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
})


// Routes 
app.use('/api/appliances', require('./routes/api/appliances'));
app.use('/api/furniture', require('./routes/api/furniture'));
app.use('/api/entertainment', require('./routes/api/entertainment'));
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 3001; 

app.listen(PORT, console.log (`Server started on port ${PORT}`));


