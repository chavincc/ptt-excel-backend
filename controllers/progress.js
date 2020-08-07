const database = require('../database');

const queryProgress = (req, res) => {
  const { province, method, top } = req.query;
  res.send(`province=${province}, method=${method}, top=${top}`);
};

module.exports = {
  queryProgress,
};
