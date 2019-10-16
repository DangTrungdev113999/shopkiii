import mongoose from "mongoose";


let connectDB = () => {
  let URI = 'mongodb://localhost/shopki';

  return mongoose.connect( URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }); 
}

module.exports = connectDB;
