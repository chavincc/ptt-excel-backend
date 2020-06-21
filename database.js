const Mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

Mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Mongoose.set('useCreateIndex', true);

const UserSchema = new Mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: 'user' }
);

module.exports = {
  User: Mongoose.model('User', UserSchema),
};
