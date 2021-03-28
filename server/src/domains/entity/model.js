const mongoose = require('mongoose');
const autopopulate = require("mongoose-autopopulate");

const entitySchema = mongoose.Schema(
  {
    name: { type: String }
  },
  { timestamps: true },
);

entitySchema.plugin(autopopulate);
exports.EntityModel = mongoose.model('entity', entitySchema);
