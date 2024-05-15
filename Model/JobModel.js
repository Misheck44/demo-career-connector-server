const mongoose = require("mongoose");
const { JOB_STATUS, JOB_TYPE } = require("../Utils/JobConstants");

// const ApplicationModel = require("../Model/ApplicationModel");

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            requried: [true, "A Company name is required"],
            trim: true,
            minLength: [5, "Company name is too short"],
            maxLength: [100, "Company name is too long"],
        },
        position: {
            type: String,
            requried: [true, "Internship must have a Position"],
            trim: true,
            minLength: [5, "Company name is too short"],
            maxLength: [200, "Company name is too long"],
        },
        jobStatus: {
            type: String,
            enum: Object.values(JOB_STATUS),
            default: JOB_STATUS.PENDING,
        },
        jobType: {
            type: String,
            enum: Object.values(JOB_TYPE),
            default: JOB_TYPE.FULL_TIME,
        },
        jobLocation: {
            type: String,
            required: [true, "Internship must have a location"],
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        jobVacancy: {
            type: String,
            requried: [true, "Internship Vacancy is required"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobSalary: {
            type: String,
            requried: [true, "Internship Salary is required"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobDeadline: {
            type: String,
            requried: [true, "Internship Deadline is requried"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobDescription: {
            type: String,
            requried: [true, "Internship Description is requried"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobSkills: {
            type: [],
            requried: [true, "Internship Skills is requried"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobFacilities: {
            type: [],
            requried: [true, "Internship facilities is requried"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
        jobContact: {
            type: String,
            requried: [true, "Internship contact is requried"],
            trim: true,
            // minLength: [5, "Company name is too short"],
            // maxLength: [100, "Company name is too long"],
        },
    },
    { timestamps: true } // to keep track
);

// JobSchema.pre("remove", async function (next) {
//     try {
//         // 'this' refers to the job being removed
//         await ApplicationModel.deleteMany({ jobId: this._id });
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;
