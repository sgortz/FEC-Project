var models = require('../models');

module.exports = {

  getRelatedProducts: function (req, res) {

    models.relatedProducts.getRelatedProducts(req.query, (err, data) => {
      if (err) {
        console.log('controller error from getQuestions:');
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
}