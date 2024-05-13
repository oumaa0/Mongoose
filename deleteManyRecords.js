// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to delete many documents using Model.deleteMany()
const deleteMany = async () => {
  try {
    // Use Model.deleteMany() to delete documents with name "Mary"
    const result = await Person.deleteMany({ name: "Mary" });

    console.log('Deleted documents:', result);
  } catch (err) {
    console.error('Error deleting documents:', err);
  }
};

// Invoke the function to delete many documents
deleteMany();
