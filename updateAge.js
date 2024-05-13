// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to update age by name
const updateAge = async (personName) => {
  try {
    // Use model.findOneAndUpdate() to find a person by name and update age
    const updatedPerson = await Person.findOneAndUpdate(
      { name: personName }, // Search condition
      { age: 20 }, // Update age to 20
      { new: true } // Return the updated document
    );

    if (!updatedPerson) {
      console.log(`No person found with the name "${personName}"`);
      return;
    }

    console.log('Updated person:', updatedPerson);
  } catch (err) {
    console.error('Error updating age:', err);
  }
};

// Define the name of the person to update
const personName = 'John';  

// Invoke the function to update age
updateAge(personName);
