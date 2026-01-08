// const mongoose = require('mongoose');
// require('dotenv').config();


// exports.connectDB = () => {
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//         .then(() => {
//             console.log('Database connected succcessfully');
//         })
//         .catch(error => {
//             console.log(`Error while connecting server with Database`);
//             console.log(error);
//             process.exit(1);
//         })
// };



const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting server with Database");
    console.error(error);
    process.exit(1);
  }
};
