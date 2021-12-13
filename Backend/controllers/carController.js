const Car = require("../models/carModel");

exports.getAllCars = async (req, res) => {
  try {
    let allCars;
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      allCars = await Car.find().sort(sortBy);
    } else {
      allCars = await Car.find();
    }
    // const allCars = await Car.find();

    res.status(200).json({
      status: "success",
      results: allCars.length,
      data: {
        cars: allCars,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.getCar = async (req, res) => {
  const id = req.params.id;

  try {
    const car = await Car.findById(id);

    res.status(200).json({
      status: "success",
      results: car.length,
      data: {
        car,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        car: newCar,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const newCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        car: newCar,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const newCar = await Car.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: {
        car: newCar,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
