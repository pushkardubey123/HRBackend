const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: { type: String, enum: ["admin", "employee"], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  passwordHash: { type: String, required: true },
  gender: String,
  dob: Date,
  address: String,
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  designationId: { type: mongoose.Schema.Types.ObjectId, ref: "Designation" },
  shiftId: String,
  doj: Date,
  status: { type: String, enum: ["active", "inactive", "resigned"], default: "active" },
  documents: [String],
  profilePic: String,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String,
  }
}, { timestamps: true });

const userTbl = mongoose.model("User", UserSchema);

module.exports=userTbl
