const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

// get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//console.log(db.readyState);
