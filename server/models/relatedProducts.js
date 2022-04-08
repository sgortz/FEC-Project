const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');

module.exports = {

  getRelatedProducts: function (req, callback) {

    let product_id = req.body.product_id;

    options = {
      method: 'get',
      url: `${FEC_API_URL}qa/questions/${question_id}/helpful`,
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
        console.log('Error in models putQuestionHelpful:', err);
      });

  },
}