const mongoose = require('mongoose');

const { ProgressSchema } = require('./models/progress');

const DATABASE_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@devsandbox.zi8eu.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(
    `connected to ${process.env.MONGO_USERNAME} :: ${process.env.MONGO_DATABASE_NAME}`
  );
});

module.exports = {
  Progress: mongoose.model('Progress', ProgressSchema),
};
