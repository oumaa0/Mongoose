// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to delete a document using findOneAndRemove
const deleteOne = async (personId) => {
  try {
    // Use model.findOneAndRemove() to find and remove a document by _id
    const deletedPerson = await Person.findOneAndDelete({ _id: personId });

    if (!deletedPerson) {
      console.log(`No person found with the _id "${personId}"`);
      return;
    }

    console.log('Deleted person:', deletedPerson);
  } catch (err) {
    console.error('Error deleting document:', err);
  }
};

// Define the _id of the person to delete
const personId = 'your_person_id'; // Replace 'your_person_id' with the actual _id

// Invoke the function to delete a document using findOneAndRemove
deleteOne(personId);
