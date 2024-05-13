// Import the Person model for database interaction
const connectDB = require("./db");
const Person = require("./personModel");

connectDB();
// Find people with a specific name

const findData = async () => {
  const data = await Person.find({ name: "Wael" });
  console.log('People with name "Wael":', data);
};

findData();

