const { check } = require("express-validator");
const { JOB_TYPE, JOB_STATUS } = require("../Utils/JobConstants");

exports.checkJobInput = [
    check("company").trim().notEmpty().withMessage("Internship  must have a Company"),
    check("position").trim().notEmpty().withMessage("Internship  must have a Position"),
    check("jobLocation")
        .trim()
        .notEmpty()
        .withMessage("Internship location is required"),
    check("jobStatus")
        .isIn(Object.values(JOB_STATUS))
        .withMessage("Invalid Internship  status"),
    check("jobType")
        .isIn(Object.values(JOB_TYPE))
        .withMessage("Invalid Internship  type"),
    check("jobVacancy")
        .trim()
        .notEmpty()
        .withMessage("Internship  Vacancy is required"),
    check("jobSalary").trim().notEmpty().withMessage("Internship  Salary is required"),
    check("jobDeadline")
        .trim()
        .notEmpty()
        .withMessage("Internship  Deadline is required"),
    check("jobDescription")
        .trim()
        .notEmpty()
        .withMessage("Internship  Description is required"),
    check("jobSkills").isArray({ min: 1 }).withMessage("Internship Skills is required"),
    check("jobFacilities")
        .isArray({ min: 1 })
        .withMessage("Internship  Facilities is required"),
    check("jobContact")
        .trim()
        .notEmpty()
        .withMessage("Internship contact is required"),
];
