const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    content: { type: String, required: true, unique: true }
}, {
    // options
    timestamps: true, // creat_at updated_at
    // _id: false
});

module.exports = mongoose.model("Question", QuestionSchema);