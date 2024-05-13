// Import the necessary modules
const connectDB = require("./db");
const Person = require("./personModel");

// Connect to the database
connectDB();

// Function to find people who like burritos
const searchBurritos = async () => {
  try {
    // Use query helpers to narrow search results
    const data = await Person.find({ favoriteFoods: "burritos" }) // Find people who like burritos
      .sort({ name: 1 }) // Sort them by name in ascending order
      .limit(2) // Limit the results to two documents
      .select({ age: 0 }) // Hide their age
      .exec(); // Execute the query

    console.log('People who like burritos:', data);
  } catch (err) {
    console.error('Error searching for burritos:', err);
  }
};

// Invoke the function to search for people who like burritos
searchBurritos();
