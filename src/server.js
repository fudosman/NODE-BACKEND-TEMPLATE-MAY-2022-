const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db.config");

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DB_CLOUD);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();