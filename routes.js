const {Router} = require ('express');
const CommentsController = require('./controllers/CommentsController');
const TextToSpeech = require('./services/watson');


const router = Router();
const commentsController = new CommentsController();
const textToSpeech = new TextToSpeech();

//rotas
router.post('/comments', commentsController.createComment);
router.get('/readComments', commentsController.readComments);
router.post('/generateSound', textToSpeech.generatesSound);

router.get('/index', (req, res) => {
    res.render('views/index');
});

module.exports = router;