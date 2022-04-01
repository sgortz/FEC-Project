const axios = require('axios');
const { API_KEY, FEC_API_URL } = require('../../client/src/config/config');
// https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/


module.exports = {

  getQuestions: function (query, callback) {

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

  postQuestion: function (body, callback) {

    options = {
      method: 'post',
      url: `${FEC_API_URL}qa/questions`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      },
      data: body,
    };

    return axios(options)
      .then(res => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log('Error in models postQuestion:', err);
      });

  },

  postAnswer: function (req, callback) {

    let question_id = req.params.question_id;

    options = {
      method: 'post',
      url: `${FEC_API_URL}qa/questions/${question_id}/answers`,
      headers: {
        'User-Agent': 'request',
        'Authorization': API_KEY
      },
      data: req.body,
    };

    return axios(options)
      .then(res => {
        callback(null, res.data);
      })
      .catch((err) => {
        console.log('Error in models postAnswer:', err);
      });

  },

  putQuestionHelpful: function (req, callback) {

    let question_id = req.params.question_id;

    options = {
      method: 'put',
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

  putAnswerHelpful: function (req, callback) {

    let answer_id = req.params.answer_id;

    options = {
      method: 'put',
      url: `${FEC_API_URL}qa/answers/${answer_id}/helpful`,
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
        console.log('Error in models putAnswerHelpful:', err);
      });

  },

  putReportQuestion: function (req, callback) {

    let question_id = req.params.question_id;

    options = {
      method: 'put',
      url: `${FEC_API_URL}qa/questions/${question_id}/report`,
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
        console.log('Error in models putReportQuestion:', err);
      });

  },

  putReportAnswer: function (req, callback) {

    let answer_id = req.params.answer_id;

    options = {
      method: 'put',
      url: `${FEC_API_URL}qa/answers/${answer_id}/report`,
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
        console.log('Error in models putReportQuestion:', err);
      });

  }

}