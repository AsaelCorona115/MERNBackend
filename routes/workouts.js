const express = require("express");
const Workouts = require("../models/workoutModel");
const router = express.Router();
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

//Get all workouts
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getSingleWorkout);

//Create a workout and post it to DB
router.post("/", createWorkout);

//Delete workout from DB
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
