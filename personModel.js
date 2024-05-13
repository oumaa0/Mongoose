// Import Mongoose object for schema creation
const mongoose = require('mongoose');

// Define the schema for the Person model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

// Create the Person model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the Person model for use in other files
module.exports = Person;
