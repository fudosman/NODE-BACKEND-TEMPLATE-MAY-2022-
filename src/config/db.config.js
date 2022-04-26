const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// export the mongoose connecting string
module.exports = async () => {
  try {
    await mongoose.connect(MONGO_URL, mongoOptions);
    console.log("DB connected successfully");
  } catch (err) {
    console.log("<::: Couldn't connect to database ", err);
  }
};