const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');

module.exports = {

  getRelatedProducts: function (query, callback) {

    let product_id = query.product_id;

    options = {
      method: 'get',
      url: `${FEC_API_URL}products/${product_id}/related`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      },

    };

    return axios(options)
      .then(res => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log('Error in models getRelatedProducts:', err);
      });

  },
}