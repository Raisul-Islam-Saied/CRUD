const User = require("../Models/user.model");
const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age } = req.body;
    const user = await User.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: { name, age },
      },
      {
        new: true,
      }
    );
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findByIdAndDelete({
      _id: id,
    });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
