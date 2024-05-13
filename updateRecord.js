// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to perform classic update
const updateRecord = async (personId) => {
  try {
    // Find the person by _id
    const person = await Person.findById(personId);
    if (!person) {
      console.log('No person found with the provided id:', personId);
      return;
    }

    // Add "hamburger" to the list of favoriteFoods
    person.favoriteFoods.push("hamburger");

    // Save the updated person
    await person.save();

    console.log('Person updated successfully:', person);
  } catch (err) {
    console.error('Error updating person:', err);
  }
};

// Define the _id of the person to update
const personId = '66266a7128c0d87972083323'; // Replace 'your_person_id' with the actual _id

// Invoke the function to perform classic update
updateRecord(personId);
