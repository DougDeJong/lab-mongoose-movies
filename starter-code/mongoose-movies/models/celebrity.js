const mongoose = require("mongoose");
const Schema   = mongoose.Schema;



const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String,
  movies: [{type: Schema.Types.ObjectId, ref: "Movie"}]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;