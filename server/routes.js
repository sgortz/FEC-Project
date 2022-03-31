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
router.get('/qa/questions/:question_id/answers', controller.questions.getAnswers)
router.post('/qa/questions', controller.questions.postQuestion);
router.post('/qa/questions/:question_id/answers', controller.questions.postAnswer);
router.put('/qa/questions/:question_id/helpful', controller.questions.putQuestionHelpful);
router.put('/qa/questions/answer/helpful', controller.questions.putAnswerHelpful);
router.put('/qa/questions/:question_id/report', controller.questions.putReportQuestion);



module.exports = router;

