const mongoose = require('mongoose');

const EmployeeSchema1 = new mongoose.Schema({
    client: String,
    query: String,
    priority: { type: String, enum: ['NORMAL', 'MEDIUM', 'HIGH'] } // Define priority field with enum values
});

const EmployeeModel1 = mongoose.model("query", EmployeeSchema1);
module.exports = EmployeeModel1;
