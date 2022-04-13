const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/

module.exports = {
  getProductFeatures: function (product_id) {
    let options = {
      method: 'get',
      url: `${FEC_API_URL}products/${product_id}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log('An error occurred while getting the product\'s features', err);
      });
  },

  getProductStyles: function (product_id) {
    let options = {
      method: 'get',
      url: `${FEC_API_URL}products/${product_id}/styles`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };
    return axios(options)
      .then((response) => { return response.data; })
      .catch((err) => {
        console.log('An error occurred while getting the product\'s styles', err);
      });
  }
}