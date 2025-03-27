const mongoose = require("mongoose");

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HomeClass", // here we need to give name that we given while modele exports. module.exports = mongoose.model("HomeClass", homeSchema);
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Favourite", favouriteSchema);
