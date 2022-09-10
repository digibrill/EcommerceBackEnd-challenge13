const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all', (req, res) => {
    db.Todo.findAll().then(todos => res.send(todos));
});
router.get('/find/:id', (req, res) => {
    db.Todo.findAll({
        where: {
            id: req.params.id
        }
    }).then(todo => res.send(todo));
});

router.post('/new', (req, res) => {
    db.Todo.create({
        text: req.body.text
    }).then(submittedTodo => res.send(submittedTodo));
});

router.put('/edit', (req, res) => {
    db.Todo.update({
        text: req.body.text
    }, {
        where: {
            id: req.body.id
        }
    }).then(res.send('updated!'));
});

router.delete('/delete/:id', (req, res) => {
    db.Todo.destroy({
        where: {
            id: req.params.id
        }

    }).then(todos => res.send("Success!"));
});
module.exports = router;
