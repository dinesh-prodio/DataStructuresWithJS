"use strict";

const Learning = require('../services/custom-learning');

function addRoutes(router) {
    router.get('/learning/checkmodule', function (req, res, next) {
        let array = req.body;
        let learning;
        Learning.fillGlobal("1")
            .then(val => {
                learning = val
                let Again = require('../Services/Custom-Learning');
                return Again.fillGlobal("2")
            })
            .then(value => {
                res.status(200).send({
                    test: "test",
                    real: learning,
                    again: value
                });
            });
    });
}

class Person {
    var _name;

    Person(name) {
        _name = name;
    }

    kill() {
        console.log(name + " has been shot")
    }
}
module.exports = {
    addRoutes
}
