const router = require('express').Router();
const Employee = require('../models/employee.model');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    const { name, gender, credential, phoneNumber, scheduledShifts, preferredUnits } = req.body;
    const newEmployee = new Employee({ name, gender, credential, phoneNumber, scheduledShifts, preferredUnits });

    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Other CRUD operations (update, delete, etc.) can be added here

module.exports = router;
