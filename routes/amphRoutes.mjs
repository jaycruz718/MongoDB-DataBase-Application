import express from "express";
import amphibian from "../models/amphSchema.mjs";
const router = express.Router();

router
  .route("/")
  .post(async (req, res) => {
    try {
      // Perform Action
      let newAmphibian = await Amphibian.create(req.body);

      // Return Response
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
        { new: true } // Option to allow newly updated object to be sent back
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