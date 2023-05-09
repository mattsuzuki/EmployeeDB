const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    credential: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    scheduledShifts: [{ type: String }],
    preferredUnits: [{ type: String }]
}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
