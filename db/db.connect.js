const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "employee_management",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB: ", error));
