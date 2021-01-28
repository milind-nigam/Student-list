module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        Sno: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Student_Name: {
            type: Sequelize.STRING
        },
        Father_Name: {
            type: Sequelize.STRING
        },
        DOB: {
            type: Sequelize.STRING
        },
        Address: {
            type: Sequelize.STRING
        },
        City: {
            type: Sequelize.STRING
        },
        State: {
            type: Sequelize.STRING
        },
        Pin: {
            type: Sequelize.STRING
        },
        Phone_Number: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        Class_Opted: {
            type: Sequelize.STRING
        },
        Marks: {
            type: Sequelize.STRING
        },
        Date_Enrolled: {
            type: Sequelize.STRING
        }

    });

    return Student;
};