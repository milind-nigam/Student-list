const db = require("../config/db.config.js");
const Student = db.students;


// Create and Save a new Student
exports.create = (req, res) => {
    Student.create({
        "Sno": req.body.Sno,
        "Student_Name": req.body.Student_Name,
        "Father_Name": req.body.Father_Name,
        "DOB": req.body.DOB,
        "Address": req.body.Address,
        "City": req.body.City,
        "State": req.body.State,
        "Pin": req.body.Pin,
        "Phone_Number": req.body.Phone_Number,
        "Email": req.body.Email,
        "Class_Opted": req.body.Class_Opted,
        "Marks": req.body.Marks,
        "Date_Enrolled": req.body.Father_Name,
    }).then(student => {
        // Send created student to client
        res.json(student);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    Student.findAll({
        attributes: {
            exclude: ['Father_Name', 'DOB', 'Address', 'City', 'State', 'Pin', 'Date_Enrolled'],
            order: [
                ['id', 'DESC'],
            ],
        }
    }).then(students => {
        // Send All Customers to Client
        res.json(students.sort(function(c1, c2) { return c1.Sno - c2.Sno }));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Find a single Student with an Sno.
exports.findOne = (req, res) => {
    const Sno = req.params.Sno;
    Student.findOne({ where: { Sno: Sno } }).then(student => {
        res.json(student);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Update a Student by the Sno. in the request
exports.update = (req, res) => {
    const Sno = req.body.Sno;
    Student.update(req.body, { where: { Sno: Sno } }).then(() => {
        res.status(200).json({ mgs: "Updated Successfully -> student Id = " + Sno });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};