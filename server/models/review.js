const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/


module.exports = {
  getAllreviews: function (page, count, sort, product_id, callback) {
    let options = {
      method: 'get',
      url: `${FEC_API_URL}reviews?product_id=${product_id}&page=${page}&count=${count}&sort=${sort}`,
      headers : {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response)=>{
        callback(null, response.data);
      })
      .catch((err)=>{
        console.log('Error getting all reviews');
        console.log(err);
      });
  },

  getReviewMeta: function (product_id, callback) {
    let options = {
      method: 'get',
      url: `${FEC_API_URL}reviews/meta?product_id=${product_id}`,
      headers : {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response)=>{
        callback(null, response.data);
      })
      .catch((err)=>{
        console.log('Error getting review Metadata');
        console.log(err);
      });
  },

  writeReview: function (databody, callback) {
    let options = {
      method: 'post',
      url: `${FEC_API_URL}reviews`,
      headers : {
        'User-Agent': 'request',
        'Authorization': API_KEY
      },
      data: databody
    };

    return axios(options)
      .then((response)=>{
        callback(null, response.data);
      })
      .catch((err)=>{
        console.log('Error posting new review');
        console.log(err);
      });
  },

  putHelpful: function (review_id, callback) {
    let options = {
      method: 'put',
      url: `${FEC_API_URL}reviews/${review_id}/helpful`,
      headers : {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response)=>{
        callback(null, response.data);
      })
      .catch((err)=>{
        console.log('Error putting helpful');
        console.log(err);
      });
  },

  putReport: function (review_id, callback) {
    let options = {
      method: 'put',
      url: `${FEC_API_URL}reviews/${review_id}/report`,
      headers : {
        'User-Agent': 'request',
        'Authorization': API_KEY
      }
    };

    return axios(options)
      .then((response)=>{
        callback(null, response.data);
      })
      .catch((err)=>{
        console.log('Error putting report');
        console.log(err);
      });
  }

}