var express = require('express');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + Math.random() + file.originalname);
    },
    fileFilter: function (req, file, cb) {
        if (file.originalname.indexOf('.jpg') > 0) {
            cb(null, true);
        } else
            cb(null, false);
        }

});

var uploads = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024}
}).single('file');

var router = express.Router();

router.post('/dangky', uploads,
    function (req,res, next) {

    uploads(req, res, function (err){
        if (err !=null){
            res.send(err);
        } else {
            var email = req.body.email;
            var password = req.body.password;
            var fileName = req.file.length;
            console.log(password);
            console.log(fileName);

            res.send('Upload File Thanh Cong');
        }
    })

    })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/404', function(req, res, next) {
  res.render('404', { title: 'Express' });
});
router.get('/blank', function(req, res, next) {
  res.render('blank', { title: 'Express' });
});
router.get('/buttons', function(req, res, next) {
  res.render('buttons', { title: 'Express' });
});
router.get('/cards', function(req, res, next) {
  res.render('cards', { title: 'Express' });
});
router.get('/tables', function(req, res, next) {
  res.render('tables', { title: 'Express' });
});router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

router.get('/charts', function(req, res, next) {
  res.render('charts', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/forgot-password', function(req, res, next) {
  res.render('forgot-password', { title: 'Express' });
});

module.exports = router;
