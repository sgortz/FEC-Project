var models = require('../models');

module.exports = {

  getQuestions: function (req,res) {
    console.log(req.query);
    models.questions.getQuestions(req.query, (err, data) => {
      if (err) {
        console.log('controller error from getQuestions:', err);
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  getAnswers: function (req,res) {
    console.log(req.query);
    models.questions.getQuestions(req.query, (err, data) => {
      if (err) {
        console.log('controller error from getQuestions:', err);
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  postQuestion: function (req,res) {
    console.log("controller post func linked!");
  },

  postAnswer: function (req,res) {
    console.log("controller post func linked!");
  },


  putQuestionHelpful: function (req,res) {
    console.log("controller put func linked!");
  },

  putAnswerHelpful: function (req,res) {
    console.log("controller put func linked!");
  },
  putReportQuestion:  function (req,res) {
    console.log("controller put func linked!");
  }



}