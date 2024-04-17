const mongoose = require("mongoose")
const ToolsSchema = mongoose.Schema({
usage: {
    type : String,
    required: [true, "ToolUsage is required"],
    minlength : [5, "Name must be at least 3"],
    maxlength : [15, "Tool usage name must be below 15"]
},

name: {
    type : String,
    required: [true, "ToolName is required"],
    minlength : [3, "Name must be at least 3"],
},

price: {
    type : Number,
    required: [true, "ToolPrice is required"],
    min: [1, "Price must be at least $1"],
}
})
module.exports = mongoose.model("Tools",
ToolsSchema)