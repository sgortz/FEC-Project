var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
// example:
// router.get('/pageDetail', controller.pageDetail.get);

/* -------- PRODUCT OVERVIEW -------- */
router.get('/products/:product_id/', controller.products.getProductData);

//Ratings and Reviews
router.get('/reviews/', controller.review.getAllreviews);
router.get('/reviews/meta/', controller.review.getReviewMeta);
router.post('/reviews', controller.review.writeReview);
router.put('/reviews/:review_id/helpful', controller.review.putHelpful);
router.put('/reviews/:review_id/report', controller.review.putReport);

/* -------- QUESTION & ANSWER -------- */

router.get('/qa/questions', controller.questions.getQuestions);
router.post('/qa/questions', controller.questions.postQuestion);
router.post('/qa/questions/:question_id/answers', controller.questions.postAnswer);
router.put('/qa/questions/:question_id/helpful', controller.questions.putQuestionHelpful);
router.put('/qa/answers/:answer_id/helpful', controller.questions.putAnswerHelpful);
router.put('/qa/questions/:question_id/report', controller.questions.putReportQuestion);
router.put('/qa/answers/:answer_id/report', controller.questions.putReportAnswer);

/* -------- Related Items & Comparison -------- */
router.get('/products/:product_id/related',controller.relatedProducts.getRelatedProducts);

module.exports = router;