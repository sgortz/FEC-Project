const models = require('../models');
// const {getAllreviews, getReviewMeta, writeReview, putHelpful, putReprot} = models.review;


module.exports = {
  getAllreviews: function (req, res) {
    // console.log(req.query);

    let {page, count, sort, product_id} = req.query;
    models.review.getAllreviews(page, count, sort, product_id, (err, results)=>{
      if (err) {
        console.log('Unable to get all reviews');
        res.sendStatus(500);
      } else {
        // console.log('Success! Get All Reviews!');
        res.status(200).json(results);
      }
    });


  },

  getReviewMeta: function (req, res) {
    // console.log(req.query);

    let {product_id} = req.query;
    models.review.getReviewMeta(product_id, (err, results)=>{
      if (err) {
        console.log('Unable to get review metadata');
        res.sendStatus(500);
      } else {
        // console.log('Success! Get Review Meta!');
        res.status(200).json(results);
      }
    });

  },

  writeReview: function (req, res) {
    // console.log(req.body);

    const databody = {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics
    }

    models.review.writeReview(req.body, (err, results)=>{
      if (err) {
        console.log('Unable to write review');
        res.sendStatus(500);
      } else {
        // console.log('Success! Write Review!');
        res.sendStatus(201);
      }

    });

  },

  putHelpful: function (req, res) {
    // console.log(req.params);

    let {review_id} = req.params;
    models.review.putHelpful(review_id, (err, results)=>{
      if (err) {
        console.log('Unable to put helpful');
        res.sendStatus(500);
      } else {
        // console.log('Success! Put Helpful!');
        res.sendStatus(204);
      }

    });

  },

  putReport: function (req, res) {
    // console.log(req.params);

    let {review_id} = req.params;
    models.review.putReport(review_id, (err, results)=>{
      if (err) {
        console.log('Unable to put report');
        res.sendStatus(500);
      } else {
        // console.log('Success! Put Report!');
        res.sendStatus(204);
      }

    });

  }





}