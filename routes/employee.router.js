const express = require("express");
const {
  addEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployee
} = require("../controllers/employee.controller");
const router = express.Router();

router.get("/employees", async (req, res) => {
  try {
    const employees = await getEmployees();
    res
      .status(200)
      .json({ message: "All Employees Fetched Successfuly", employees });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/employee/:employeeId", async (req, res) => {
  try {
    const employee = await getEmployeeById(req.params.employeeId);
    res.status(200).json({ message: "Employee Fetched Successfuly", employee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/employee", async (req, res) => {
  try {
    const createdEmployee = await addEmployee(req.body);
    res
      .status(201)
      .json({ message: "Employee Created Successfully", createdEmployee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/employee/:employeeId", async (req, res) => {
  try {
    const updatedEmployee = await updateEmployee(req.params.employeeId, req.body);
    res
      .status(201)
      .json({ message: "Employee Updated Successfully", updatedEmployee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/employee/:employeeId", async (req, res) => {
  try {
    const deletedEmployee = await deleteEmployeeById(req.params.employeeId);
    res
      .status(200)
      .json({ message: "Employee Deleted Successfuly", deletedEmployee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
