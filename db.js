/*// Import required modules
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Connect to MongoDB Atlas
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const uri = 'mongodb+srv://skandersanekli:kdR8Nj5PbjZDLYOZ@cluster0.g1flwgt.mongodb.net/<dbname>?retryWrites=true&w=majority';
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Export the Mongoose object for use in other files

module.exports = mongoose;*/

// Import required modules




const mongoose = require("mongoose");

// Connect to MongoDB Atlas
const uri =
  "mongodb+srv://skandersanekli:kdR8Nj5PbjZDLYOZ@cluster0.g1flwgt.mongodb.net/<dbname>?retryWrites=true&w=majority";

/* const uri = process.env.MONGO_URI; */
const connectDB = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};
connectDB()
// Export the Mongoose object for use in other files
module.exports = connectDB; 
