const mongoose = require("mongoose");
const Favourite = require("../models/favourtieModel");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  photoUrl: String,
  description: String,
});

//This is a pre hook. So when any one delete home using findOneAndDelete at that time it will first fetch that
// home id that is _id from db and assign to homeid and then it will first delete from favourite and then delete from home table.

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()["_id"];
  await Favourite.deleteMany({ houseId: homeId });
  next();
});

module.exports = mongoose.model("HomeClass", homeSchema);
