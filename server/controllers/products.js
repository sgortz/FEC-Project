const { getProductFeatures, getProductStyles } = require('../models/products.js');

module.exports = {
  getProductData: function (req, res) {
    console.log('There is a ', req.method, ' coming in for features');
    // console.log(product_id);
    let { product_id } = req.params;

    let promises = [getProductFeatures(product_id), getProductStyles(product_id)];
    return Promise.all(promises)
      .then((results) => {
        // console.log(results)
        res.status(200).json(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      })
  },
}