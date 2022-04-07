const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/

module.exports = {
  getProductInfo: function (callback) {
    options = {
      method: 'get',
      // url: `${FEC_API_URL}products/?count=${count}`,
      url: `${FEC_API_URL}products/`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('An error occurred while getting the product\'s information', err);
      });
  },

  getProductFeatures: function (product_id, callback) {
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
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('An error occurred while getting the product\'s features', err);
      });
  },

  getProductStyles: function (product_id, callback) {
    let options = {
      method: 'get',
      url: `${FEC_API_URL}products/${product_id}/styles`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };
    console.log('here\'s the url: ', options.url)
    return axios(options)
      .then((response) => {
        callback(null, response.data);
      })
      .catch((err) => {
        console.log('An error occurred while getting the product\'s styles', err);
      });
  },


}