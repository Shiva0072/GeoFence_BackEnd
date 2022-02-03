const mongoose = require("mongoose");

const link = "mongodb://localhost:27017/GeoFence";

const db = mongoose.connect(link);

// mongoose.connect(link, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: true,
// });

// const db = mongoose.connection;
// db.on("error", console.log("err in db connection "));
// db.once("open", function () {
//   console.log("DB server is running ");
// });

module.exports = db;
