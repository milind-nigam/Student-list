module.exports = function(app) {
    const students = require("../controllers/student.controller.js");

    var router = require("express").Router();

    // Create a new student
    app.post('/api/students', students.create);

    // Retrieve all students
    app.get('/api/students', students.findAll);

    // Retrieve a single student with Sno
    app.get('/api/students/:Sno', students.findOne);

    // Update a Tutorial with id
    app.put('/api/students', students.update);


};