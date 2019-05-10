const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



//Bodyparser Middleware
app.use(express.json());


//Connecting to Mongo using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appliances");




  // Use Routes
app.use('/api/appliances', require('./routes/api/appliances'));
app.use('/api/furniture', require('./routes/api/furniture'));
app.use('/api/entertainment', require('./routes/api/entertainment'));


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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('dotenv').config();


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
