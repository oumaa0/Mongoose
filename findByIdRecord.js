// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to find a document by _id
const findByIdRecord = async (personId) => {
  try {
    // Use Model.findById() to find a document by _id
    const person = await Person.findById(personId);
    if (!person) {
      console.log('No person found with the provided _id:', personId);
    } else {
      console.log('Person found by _id:', person);
    }
  } catch (err) {
    console.error('Error finding document by _id:', err);
  }
};

// Define the _id of the person to search for
const personId = 'your_person_id'; // Replace 'your_person_id' with the actual _id

// Invoke the function to find a document by _id
findByIdRecord(personId);
