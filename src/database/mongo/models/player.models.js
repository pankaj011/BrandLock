"use strict";

const mongoose = require("mongoose");
const { player: playerSchema } = require("../schema");

module.exports = mongoose.model("player", playerSchema);
