import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const amphSchema = new mongoose.Schema({
    name: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, min: 0, required: true },
    habitat: {
        type: String, 
        enum: {
            values: [
            "tropical",
            "desert",
            "aquatic",
            "jungles",
            "temperate",
        ],
        message: "{VALUE} is not supported",
    },
    required: true,
   },
});

amphSchema.index({ species: 1 });
amphSchema.index({ habitat: 1 });

// Static method
amphSchema.statics.inHabitat = function (habitat) {
  return this.find({ habitat });
};

// Instance method
amphSchema.methods.getOthersInHab = function () {
  return this.constructor.find({ habitat: this.habitat, _id: { $ne: this._id } });
};


export default mongoose.model("Amphibian", amphSchema);
