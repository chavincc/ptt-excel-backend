const Mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

Mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Mongoose.set("useCreateIndex", true);

module.exports = {};
