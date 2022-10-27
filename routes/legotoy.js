var express = require('express');
const LegotoyModel = require('../models/LegotoyModel')
var router = express.Router();

/* GET home page. */
//URL: localhost:3000/student
router.get('/', (req, res) => {
    LegotoyModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('legotoy/index', { kidtoys: data })
        }
    })
})
router.get('/list', (req, res) => {
    LegotoyModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('legotoy/list', { kidtoys: data })
        }
    })
})

router.get("/add", (req, res) => {
    res.render("legotoy/add");
});

router.post("/add", (req, res) => {
    var legotoy = new LegotoyModel(req.body);
    legotoy.save((err) => {
        if (!err) {
            console.log("Add toy succeed !");
            res.redirect("/legotoy");
        } else {
            console.log(err)
        }
    });
});
//render ra form 
router.get("/edit/:id", (req, res) => {
        LegotoyModel.findById(req.params.id, (err, data) => {
            if (!err) {
                //render ra file: edit.hbs
                //gui du lieu cua object student de load vao form edit
                //student (ten) , data (du lieu) 
                res.render("legotoy/edit", { kidtoys: data })
            }
        })
    })
    //xu ly du lieu
router.post("/edit/:id", (req, res) => {
    LegotoyModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Edit toy succeed !")
            res.redirect("/legotoy")
        }
    })
})
router.get("/delete/:id", (req, res) => {
    LegotoyModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete toy success")
            res.redirect("/legotoy")
        }
    })
})
router.get("/detail/:id", (req, res) => {
    //lấy giá trị id của document gửi từ url
    var student_id = req.params.id;
    //tìm kiếm document trong collection theo id
    LegotoyModel.findById(student_id, (err, data) => {
        if (!err) {
            //render ra file detail chứa dữ liệu của document
            res.render("legotoy/detail", { kidtoys: data });
        }
    });
});

module.exports = router;