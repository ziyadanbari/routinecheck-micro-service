const mongoose = require("mongoose");

const connectToDB = async (dbURL, callback) => {
  try {
    console.log(`connection to ${dbURL}`);
    await mongoose.connect(dbURL.toString(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: true,
      connectTimeoutMS: 10000,
    });
    console.log("Connected to DB");
    if (!(callback instanceof Function))
      throw new TypeError("The second paramater must be a callback function");
    return callback();
  } catch (error) {
    console.log("Cannot connect to DB: " + error);
  }
};

module.exports = { connectToDB };
