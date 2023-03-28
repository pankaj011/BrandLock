"use strict";

const mongoose = require("mongoose");
const { skill: skillSchema } = require("../schema");

module.exports = mongoose.model("skill", skillSchema);