const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//const AWS = require('aws-sdk');
const upload = require('./fileUpload');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

//Bodyparser Middleware
app.use(express.json());

//Mongodb and items routes

//DB config
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appliances");

//Connecting to Mongo using mongoose


  // Use Routes
app.use('/api/appliances', require('./routes/api/appliances'));




//AWS

// configure the keys for accessing AWS
/*AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};
*/

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


app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('dotenv').config();
console.log('Your environment variable AWS_ACCOUNT_SID has the value: ', process.env.AWS_ACCOUNT_SID);
console.log('Your environment variable AWS_ACCOUNT_SID has the value: ', process.env.AWS_ACCESS_KEY_ID);
console.log('Your environment variable AWS_ACCOUNT_SID has the value: ', process.env.AWS_SECRET_ACCESS_KEY);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
