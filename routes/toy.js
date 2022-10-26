var express = require('express');
const ToyModel = require('../models/ToyModel')
var router = express.Router();

/* GET home page. */
//URL: localhost:3000/student
router.get('/', (req, res) => {
    ToyModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('toy/index', { kidtoys: data })
        }
    })
})
router.get('/list', (req, res) => {
    ToyModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('toy/list', { kidtoys: data })
        }
    })
})

router.get("/add", (req, res) => {
    res.render("toy/add");
});

router.post("/add", (req, res) => {
    var babytoy = new ToyModel(req.body);
    toy.save((err) => {
        if (!err) {
            console.log("Add toy succeed !");
            res.redirect("/toy");
        }
    });
});
//render ra form 
router.get("/edit/:id", (req, res) => {
        ToyModel.findById(req.params.id, (err, data) => {
            if (!err) {
                //render ra file: edit.hbs
                //gui du lieu cua object student de load vao form edit
                //student (ten) , data (du lieu) 
                res.render("toy/edit", { kidtoys: data })
            }
        })
    })
    //xu ly du lieu
router.post("/edit/:id", (req, res) => {
    ToyModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Edit toy succeed !")
            res.redirect("/toy")
        }
    })
})
router.get("/delete/:id", (req, res) => {
    ToyModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete toy success")
            res.redirect("/toy")
        }
    })
})
router.get("/detail/:id", (req, res) => {
    //lấy giá trị id của document gửi từ url
    var student_id = req.params.id;
    //tìm kiếm document trong collection theo id
    ToyModel.findById(student_id, (err, data) => {
        if (!err) {
            //render ra file detail chứa dữ liệu của document
            res.render("toy/detail", { kidtoys: data });
        }
    });
});
router.post('/search', (req, res) => {
    ToyModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
        if (!err) {
            res.render('toy/index', { kidtoys: data })
        }
    })
})

//sort function
router.get('/sort/asc', (req, res) => {
    ToyModel.find()
        .sort({ name: 1 })
        .exec((err, data) => {
            if (!err) {
                res.render('toy/list', { kidtoys: data })
            }
        })
})
router.get('/sort/desc', (req, res) => {
    ToyModel.find()
        .sort({ name: -1 })
        .exec((err, data) => {
            if (!err) {
                res.render('toy/list', { kidtoys: data })
            }
        })
})

module.exports = router;