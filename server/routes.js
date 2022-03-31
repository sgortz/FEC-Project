var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
// example:
// router.get('/pageDetail', controller.pageDetail.get);




//Ratings and Reviews
router.get('/reviews/:product_id/:page/:count/:sort', controller.review.getAllreviews);
router.get('/reviews/meta/:product_id', controller.review.getReviewMeta);
router.post('/reviews', controller.review.writeReview);
router.put('/reviews/:review_id/helpful', controller.review.putHelpful);
router.put('/reviews/:review_id/report', controller.review.putReport);
/* -------- QUESTION & ANSWER -------- */
router.get('/qa/questions', controller.questions.getQuestions);
router.post('/qa/questions', controller.questions.postQuestions);
router.post('/qa/questions/answer', controller.questions.postAnswer);
router.put('/qa/questions/helpful', controller.questions.putQuestions);
router.put('/qa/questions/answer/helpful', controller.questions.putAnswers);


module.exports = router;

