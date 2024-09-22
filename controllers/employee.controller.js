const { Employee } = require("../models/employee.model");
const {
  isRequired,
  validateEmail,
  validatePhoneNumber,
} = require("../utils/validation");

const addEmployee = async (employeeDetails) => {
  const { name, email, mobileNo, designation, gender, course, image } =
    employeeDetails;

  isRequired(name, "Name");
  isRequired(email, "Email");
  isRequired(mobileNo, "Mobile Number");
  isRequired(designation, "Designation");
  isRequired(gender, "Gender");
  isRequired(course, "Course");
  isRequired(image, "Image");
  validateEmail(email);
  validatePhoneNumber(mobileNo);

  const existingUser = await Employee.findOne({ email });
  if (existingUser) throw new Error("Email Already Exists");

  const newEmployee = new Employee(employeeDetails);
  try {
    const savedEmployee = await newEmployee.save();
    return savedEmployee;
  } catch (error) {
    throw new Error("Error saving employee in the database: " + error.message);
  }
};

const getEmployees = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    throw new Error("Error getting Employees: " + error.message);
  }
};

const getEmployeeById = async (id) => {
  try {
    const employee = await Employee.findById(id);
    return employee;
  } catch (error) {
    throw new Error("Error getting Employee: " + error.message);
  }
};

const deleteEmployeeById = async (id) => {
  try {
    const deletedEmployee = await Employee.deleteOne({ _id: id });
    return deletedEmployee;
  } catch (error) {
    throw new Error("Error getting Employee: " + error.message);
  }
};

const updateEmployee = async (id, employeeDetails) => {
  const { name, email, mobileNo, designation, gender, course, image } =
    employeeDetails;

  isRequired(name, "Name");
  isRequired(email, "Email");
  isRequired(mobileNo, "Mobile Number");
  isRequired(designation, "Designation");
  isRequired(gender, "Gender");
  isRequired(course, "Course");
  isRequired(image, "Image");
  validateEmail(email);
  validatePhoneNumber(mobileNo);

  const currentEmployee = await Employee.findById(id);
  if (!currentEmployee) {
    throw new Error("Employee Not Found!");
  }
  if (currentEmployee.email !== email) {
    const existingUser = await Employee.findOne({ email });
    if (existingUser) throw new Error("Email Already Exists");
  }

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      employeeDetails,
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedEmployee;
  } catch (error) {
    throw new Error("Error saving employee in the database: " + error.message);
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployee,
};
