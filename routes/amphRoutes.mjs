import express from "express";
import Amphibian from "../models/amphSchema.mjs";
const router = express.Router();

router.post("/test-invalid", async(req, res) =>{
    try {
      const invalidData = {
        name: "A",
        species: "",
        age: -1,
        habitat: "space"
      };
      
      const testDoc = new Amphibian(invalidData);
      await testDoc.save();

      res.status(200).json({ msg: "Unexpected success", data: testDoc});
    } catch (err) {
      if (err.name === "ValidationError") {
        const errors = {};
        for (let field in err.errors){
          errors[field] = err.errors[field].message;
        }
        return res.status(400).json({ msg: "Validation Failed", errors });
      }

      console.error(err);
      res.status(500).json({ msg: "Unexpected Server Error " });
    }
  });

router
  .route("/")
  .post(async (req, res) => {
  try {
    const { name, species, age, habitat } = req.body;
    if (!name || !species || !age || !habitat) {
      return res.status(400).json({ msg: "Missing required fields" });
    }
    if (!["tropical", "desert", "aquatic", "jungles", "temperate"].includes(habitat)) {
      return res.status(400).json({ msg: "Invalid habitat value" });
    }
    
    let newAmphibian = await Amphibian.create(req.body);
    res.json(newAmphibian);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: `Error - ${err.message}` });
  }
})

  .get(async (req, res) => {
      try {
        let allAmphibian = await Amphibian.find({});
  
        res.json(allAmphibian);
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: `Error - ${err.message}` });
      }
    });

router
  .route("/:id")
  .put(async (req, res) => {
    try {
      let updatedAmphibian = await Amphibian.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } 
      );

      res.json(updatedAmphibian);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
  })

  .delete(async (req, res) => {
    try {
      let deleteAmphibian = await Amphibian.findByIdAndDelete(req.params.id);

      res.json(deleteAmphibian);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `Error - ${err.message}` });
    }
  });

export default router;