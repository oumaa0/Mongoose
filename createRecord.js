// Import the Person model for database interaction
const connectDB = require('./db');
const Person = require('./personModel');

//connect to db
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
const uri = 'mongodb+srv://skandersanekli:kdR8Nj5PbjZDLYOZ@cluster0.g1flwgt.mongodb.net/<dbname>?retryWrites=true&w=majority';

/* const uri = process.env.MONGO_URI; */
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) 
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

connectDB()
  

// Create a new Person record

  const person = new Person({ name: 'Wael', age: 30, favoriteFoods: ['Pizza', 'Burger'] });



function savePerson(){
  person.save();
  console.log("Person added succefully");
}
savePerson();
/* person.save(function(err, data) {
  if (err) return console.error(err);
  console.log('Record saved successfully:', data);
}); */

