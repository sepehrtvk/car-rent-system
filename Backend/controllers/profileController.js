const Profile = require('../models/profileModel');


exports.getAllProfiles = async (req, res) => {
  try {
    const allProfiles = await Profile.find();

    res.status(200).json({
      status: 'success',
      results: allProfiles.length,
      data: {
        Profiles: allProfiles,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.getProfile = async (req, res) => {
  const id = req.params.id;

  try {
    const Profile = await Profile.findById(id);

    res.status(200).json({
      status: 'success',
      results: Profile.length,
      data: {
        Profile,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      error: err,
    });
  }
};

exports.createProfile = async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        Profile: newProfile,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
};


// exports.deleteProfile = async (req, res) => {
//   try {
//     const newProfile = await Profile.findByIdAndDelete(req.params.id);

//     res.status(204).json({
//       status: 'success',
//       data: {
//         Profile: newProfile,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'failed',
//       message: err,
//     });
//   }
// };
