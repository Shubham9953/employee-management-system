const employee = require("../models/Employee");

// add employee {admin only}

exports.addEmployee = async (res, req) => {
    try {
        const { name, email, position, salary } = req.body;
        const employee = employee.create({
            name,
            email,
            position,
            salary,
            userId: req.user._Id,
        })

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get all employees {admin only}

exports.getAllEmployees = async (res, req) => {
    try {
        const employees = await employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

//get gingle employee {self}

exports.getMyData = async (res, req) => {
    try {
        const employee = await Employee.findOne({ userId: req.user._Id });
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

// Delete employee 
exports.deleteEmployee = async (res, req) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};