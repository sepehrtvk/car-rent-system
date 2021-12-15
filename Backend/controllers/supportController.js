const Support = require('../models/supportModel');


exports.getAllSupports = async (req, res) => {
  try {
    const allSupports = await Support.find();

    res.status(200).json({
      status: 'success',
      results: allSupports.length,
      data: {
        Supports: allSupports,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.getSupport = async (req, res) => {
  const id = req.params.id;

  try {
    const support = await Support.findById(id);

    res.status(200).json({
      status: 'success',
      results: support.length,
      data: {
        support,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.createSupport = async (req, res) => {
  try {
    const newSupport = await Support.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        Support: newSupport,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};

exports.updateSupport = async (req, res) => {
    try {
      const newSupport = await Support.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
  
      res.status(200).json({
        status: "success",
        data: {
          car: newSupport,
        },
      });
    } catch (err) {
      res.status(404).json({
        status: "failed",
        message: err,
      });
    }
  };
  
exports.deleteSupport = async (req, res) => {
  try {
    const newSupport = await Support.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: {
        Support: newSupport,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
};
