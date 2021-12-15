const express = require("express");
const supportController = require("./../controllers/supportController");

const router = express.Router();

router
  .route("/")
  .get(supportController.getAllSupports)
  .post(supportController.createSupport);

router
  .route("/:id")
  .get(supportController.getSupport)
  .patch(supportController.updateSupport)
//   .delete(supportController.deletesupport);

module.exports = router;
