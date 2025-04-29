const app = require('../server'); // or './server' if in same folder

module.exports = (req, res) => {
  app(req, res);
};
