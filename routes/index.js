var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/quote', (req, res) => {
    var text = "<h1 style='color: red;'>Practice makes perfect</h1>"
    res.send(text)
})

module.exports = router;