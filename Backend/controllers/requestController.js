const Request = require('../models/requestModel');


exports.getAllRequests = async (req, res) => {
  try {
    const allRequests = await Request.find();

    res.status(200).json({
      status: 'success',
      results: allRequests.length,
      data: {
        Requests: allRequests,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.getRequest = async (req, res) => {
  const id = req.params.id;

  try {
    const request = await Request.findById(id);

    res.status(200).json({
      status: 'success',
      results: request.length,
      data: {
        request,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.createRequest = async (req, res) => {
  try {
    const newRequest = await Request.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        Request: newRequest,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};


exports.deleteRequest = async (req, res) => {
  try {
    const newRequest = await Request.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: {
        Request: newRequest,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
