//backend/routes/student.route.js
let mongoose = require("mongoose"),
	express = require("express"),
	router = express.Router();

// Student Model
let studentSchema =
	require("../models/Student");

// CREATE Student
router.post("/create-student",
	(req, res, next) => {
		studentSchema.create(req.body)
		.then((result) => {
			res.json(result);
		  })
		  .catch((err) => {
			res.json(err);
		  })
			
	});

// READ Students
router.get("/", (req, res) => {
	studentSchema.find({})
	.then((result) => {
		res.json(result);
	  })
	  .catch((err) => {
		res.json(err);
	  })
});

// UPDATE student
router
	.route("/update-student/:id")
	// Get Single Student
	.get((req, res) => {
		studentSchema.findById(req.params.id)
		.then((result) => {
			res.json(result);
		  })
		  .catch((err) => {
			res.json(err);
		  })
	})

	// Update Student Data
	.put((req, res, next) => {
		studentSchema.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			})
			.then((result) => {
				res.json(result);
			  })
			  .catch((err) => {
				res.json(err);
			  })
		
	});

// Delete Student
router.delete("/delete-student/:id",
	(req, res, next) => {
		studentSchema.findByIdAndRemove(req.params.id)
		.then((result) => {
			res.json(result);
		  })
		  .catch((err) => {
			res.json(err);
		  })

	});

module.exports = router;
