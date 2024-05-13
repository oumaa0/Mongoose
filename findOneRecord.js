// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to find a single matching document
const findOneRecord = async () => {
  try {
    // Use model.findOne() to find a single matching document
    const person = await Person.findOne({ name: "John" });
    console.log('Single matching document:', person);
  } catch (err) {
    console.error('Error finding document:', err);
  }
};

// Invoke the function to find a single matching document
findOneRecord();
