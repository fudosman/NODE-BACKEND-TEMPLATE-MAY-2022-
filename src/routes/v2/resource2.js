const express = require("express");
const router = express.Router();
const {
  StatusCodes
} = require('http-status-codes');

router.get("/", (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the book route is running",
      "data": "fetching books"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
});
router.post("/", (req, res) => {
  try {
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "the creating book route is running",
      "data": "creating a new books"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
});
router.put("/", (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the update book route is running",
      "data": "updating books"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
});
router.delete("/", (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the delete book route is running",
      "data": "deleting books"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
});

module.exports = router;