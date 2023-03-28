const { Schema } = mongoose;

module.exports = new Schema({
  playerId: {
    type: String,
    // trim: true,
    // index: true
  },
  skill: {
    type: Object,
    // trim: true,
    // index: true
  }
}, {
  timestamps: true
});