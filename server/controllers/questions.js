var models = require('../models');

module.exports = {

  getQuestions: function (req, res) {

    models.questions.getQuestions(req.query, (err, data) => {
      if (err) {
        console.log('controller error from getQuestions:');
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },


  postQuestion: function (req, res) {

    models.questions.postQuestion(req.body, (err, data) => {
      if (err) {
        console.log('controller error from postQuestion:', err);
        res.status(400).send(err);
      } else {
        res.status(201).send(data);
      }
    })

  },

  postAnswer: function (req, res) {

    models.questions.postAnswer(req, (err, data) => {
      if (err) {
        console.log('controller error from postQuestion:', err);
        res.status(400).send(err);
      } else {
        res.status(201).send(data);
      }
    })

  },


  putQuestionHelpful: function (req, res) {

    models.questions.putQuestionHelpful(req, (err, data) => {
      if (err) {
        console.log('controller error from putQuestionHelpful:', err);
        res.status(400).send(err);
      } else {
        res.status(204).send(data);
      }
    })
  },

  putAnswerHelpful: function (req,res) {

    models.questions.putAnswerHelpful(req, (err, data) => {
      if (err) {
        console.log('controller error from putAnswerHelpful:', err);
        res.status(400).send(err);
      } else {
        res.status(204).send(data);
      }
    })


  },
  putReportQuestion: function (req, res) {

    models.questions.putReportQuestion(req, (err, data) => {
      if (err) {
        console.log('controller error from putReportQuestion:', err);
        res.status(400).send(err);
      } else {
        res.status(204).send(data);
      }
    })
  },

  putReportAnswer: function (req, res) {

    models.questions.putReportAnswer(req, (err, data) => {
      if (err) {
        console.log('controller error from putReportAnswer:', err);
        res.status(400).send(err);
      } else {
        res.status(204).send(data);
      }
    })
  },



}