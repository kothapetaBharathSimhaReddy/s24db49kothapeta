const mongoose = require("mongoose")
const ToolsSchema = mongoose.Schema({
usage: String,
name: String,
price: Number
})
module.exports = mongoose.model("Tools",
ToolsSchema)