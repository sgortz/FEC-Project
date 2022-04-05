const models = require('../models');

module.exports = {
  getProductInfo: function (req, res) {
    console.log('There is a ', req.method, ' coming in to Get Product Info!');

    models.products.getProductInfo((err, results) => {
      if (err) {
        console.log('Unable to get product\'s information ', err);
        res.sendStatus(500);
      } else {
        console.log('Success! Getting product\'s information!');
        res.status(200).json(results);
      }
    })
  },

  getProductFeatures: function (req, res) {
    console.log('There is a ', req.method, ' coming in to Get Product Features!');

    let { product_id } = req.query;
    models.products.getProductFeatures(product_id, (err, results) => {
      if (err) {
        console.log('Unable to get product\'s features ', err);
        res.sendStatus(500);
      } else {
        console.log('Success! Getting product\'s features!');
        res.status(200).json(results);
      }
    });
  },

  getProductStyles: function (req, res) {

    let { product_id } = req.query;
    models.products.getProductStyles(product_id, (err, results) => {
      if (err) {
        console.log('Unable to get product\'s styles ', err);
        res.sendStatus(500);
      } else {
        console.log('Success! Getting product\'s styles!');
        res.status(200).json(results);
      }
    });
  }
}