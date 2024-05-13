// Import the Person model for database interaction
const connectDB = require('./db');
const Person = require('./personModel');

//connect to db
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
const uri = 'mongodb+srv://skandersanekli:kdR8Nj5PbjZDLYOZ@cluster0.g1flwgt.mongodb.net/<dbname>?retryWrites=true&w=majority';

/* const uri = process.env.MONGO_URI; */
connectDB()
  
// Define an array of people to create
const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Bob', age: 35, favoriteFoods: ['Steak', 'Salad'] }
];

// Create multiple Person records
function createMultiple() {
Person.create(arrayOfPeople );
console.log('Created successfully');
console.log(arrayOfPeople);
}
createMultiple()