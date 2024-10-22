import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/, // Optional: regex for email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Optional: minimum password length
  },
});

const CustomerModel = mongoose.model("Customer", customerSchema);

export default CustomerModel;
