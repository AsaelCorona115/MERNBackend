const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Express App
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);

//Connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to Mongo & I'm listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
