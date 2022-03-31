const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/


module.exports = {

  getQuestions: function (query, callback) {
    //https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=3122&page=1&count=10

    const { product_id, page, count } = query;

    options = {
      method: 'get',
      url: `${FEC_API_URL}qa/questions?product_id=${product_id}&page=${page}&count=${count}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then(res => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log('Error in models getQuestions:', err);
      });

  },




}