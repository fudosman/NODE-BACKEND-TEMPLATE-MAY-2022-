const {
  StatusCodes
} = require('http-status-codes');

exports.getResource = (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the resource route is running",
      "data": "fetching resource"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};

exports.postResource = (req, res) => {
  try {
    return res.status(StatusCodes.CREATED).json({
      "status": "success",
      "message": "the creating resource route is running",
      "data": "creating a new resource"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};

exports.putResource = (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the update resource route is running",
      "data": "updating resource"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};

exports.deleteResource = (req, res) => {
  try {
    return res.status(StatusCodes.OK).json({
      "status": "success",
      "message": "the delete resource route is running",
      "data": "deleting resource"
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      "status": "error",
      "error_message": error.message
    });
  }
};