require("dotenv").config();
require("./db/db.connect");

const express = require("express");
const authRoute = require("./routes/auth.router");
const employeeRoute = require("./routes/employee.router");
// const cors = require("cors");

const app = express();
app.use(express.json());
// app.use(cors);

app.use("/api", authRoute);
app.use("/api", employeeRoute);

app.get("/", (req, res) => {
  res.send("Employee Management API");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
