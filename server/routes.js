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



module.exports = router;

