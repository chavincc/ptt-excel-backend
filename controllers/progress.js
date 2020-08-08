const database = require('../database');
const { CONSTRUCTION_METHOD } = require('../types/method');
const { PROVINCE } = require('../types/province');

const queryProgress = async (req, res) => {
  let { province, method, top } = req.query;

  top = parseInt(top);
  if (!top) {
    top = 1;
  }
  if (!method) {
    top *= Object.keys(CONSTRUCTION_METHOD).length - 1;
  }
  if (!province) {
    top *= Object.keys(PROVINCE).length;
  }

  const query = {
    ...(province && { province: province }),
    ...(method && { method: method }),
  };

  const result = await database.Progress.find(query)
    .sort({ computedDate: -1 })
    .limit(top);

  res.json(result);
};

module.exports = {
  queryProgress,
};
