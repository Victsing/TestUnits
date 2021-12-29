const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const {data} = req.body
  try {
    const user = await User.create({data})
    res.json({status: true, user})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findAll = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({status: true, user})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findOne = async (req, res) => {
  const {id} = req.body
  try {
    const user = await User.findOne({
      where: {
        id
      }
    })
    res.json({status: true, user})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.update = async (req, res) => {
  const {data} = req.body
  try {
    const user = await User.update({data}, {
      where: {
        id
      }
    })
    res.json({status: true, user})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.delete = async (req, res) => {
  const {id} = req.body
  try {
    const user = await User.detele({
      where: {
        id
      }
    })
    res.json({status: true, user})
  } catch (e) {
    res.json({status: false, e})
  }
};

