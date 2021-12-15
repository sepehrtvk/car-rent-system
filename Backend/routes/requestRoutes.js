const express = require("express");
const requestController = require("./../controllers/requestController");

const router = express.Router();

router
  .route("/")
  .get(requestController.getAllRequests)
  .post(requestController.createRequest);

router
  .route("/:id")
  .get(requestController.getRequest)
   .delete(requestController.deleteRequest);

module.exports = router;
