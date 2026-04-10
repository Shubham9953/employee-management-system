const mongoose = require("mongoose");

const emolyeeSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        position: stringify,
        salary: Number,
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
},{timestamps: true}
);


module.exports = mongoose.model("Employee", emolyeeSchema);