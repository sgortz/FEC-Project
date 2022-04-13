const { getProductFeatures, getProductStyles } = require('../models/products.js');

module.exports = {
  getProductData: function (req, res) {
    let { product_id } = req.params;
    let promises = [getProductFeatures(product_id), getProductStyles(product_id)];

    return Promise.all(promises)
      .then((results) => {
        res.status(200).json(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  },
}