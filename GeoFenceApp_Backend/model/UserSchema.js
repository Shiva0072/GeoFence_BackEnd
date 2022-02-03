const  mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  centers: [{ latitude: Number, longitude: Number }],
  coordinates: [[{ latitude: Number, longitude: Number }]],
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
