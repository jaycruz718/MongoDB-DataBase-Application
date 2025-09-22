import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const amphSchema = new mongoose.Schema({
    name: { type: String, 
            required: [true, "Amphibian name is required."],
            minlength: [2, "Name must be at least 2 characters."] 
    },
    species: { type: String, 
               required: [true, "Species is required"]
    },
    age: { type: Number, 
           min: [0, "Age cannot be negative."], 
           required: [true, "Age is required"],
           max: [100, "Age is unrealistically high."] 
    },
    habitat: {
        type: String, 
        required: [true, "Habitat is required."],
        enum: {
            values: [
            "tropical",
            "desert",
            "aquatic",
            "jungles",
            "temperate",
        ],
        message: "{VALUE} is not supported",
        }  
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        default: "unknown"
    },
    description: {
        type: String,
        maxlength: [500, "Description too long"]
    },
    available: {
      type: Boolean,
      default: true
    }
    
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
