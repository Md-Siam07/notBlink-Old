const express = require('express');
var router = express.Router();
var objectID = require('mongoose').Types.ObjectId;

var { Teacher } = require('../models/teachers')

router.get('/', (req, res)=>{
    Teacher.find((err, docs) => {
        if(!err){ res.send(docs); }
        else { console.log('Error in retriving emplpoyees: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!objectID.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Teacher.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log(`Error in Retriving Employee :` + JSON.stringify(err, undefined, 2)); }
    })
});

router.post('/',  (req, res)=>{
    var tcr = new Teacher({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    tcr.save((err, doc) => {
        if(!err){ res.send(doc); }
        else {console.log('Error in Teacher Save: ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if(!objectID.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    //console.log('called')
    var tcr = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };

    Teacher.findByIdAndUpdate(req.params.id, { $set:tcr }, { new:true } , (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log(`Error in Teacher Update: ` + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!objectID.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Teacher.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log(`Error in Teacher Delete: ` + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;