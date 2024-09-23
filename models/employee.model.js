const mongoose = require("mongoose");
// const moment = require("moment");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
    enum: ["hr", "manager", "sales"],
  },
  gender: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
    enum: ["mca", "bca", "bsc"],
  },
  image: {
    type: String,
    required: true,
  },
  // createDate: {
  //   type: String,
  //   default: () => moment().format('DD-MM-YYYY'),
  // },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = { Employee };
