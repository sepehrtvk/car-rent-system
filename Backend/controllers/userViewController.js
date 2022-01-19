const View = require('../models/userViewModel');


exports.getAllViews = async (req, res) => {
  try {
    const allViews = await View.find();

    res.status(200).json({
      status: 'success',
      results: allViews.length,
      data: {
        Views: allViews,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.getView = async (req, res) => {
  const id = req.params.id;

  try {
    const view = await View.findById(id);

    res.status(200).json({
      status: 'success',
      results: view.length,
      data: {
        View,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.createView = async (req, res) => {
  try {
    const newView = await View.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        View: newView,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};


// exports.deleteView = async (req, res) => {
//   try {
//     const newView = await View.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: {
//         View: newView,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'failed',
//       message: err,
//     });
//   }
// };
