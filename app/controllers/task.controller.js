const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const {title , description } = req.body
  console.log(req.body)
  try {
    const task = await Task.create({title , description })
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findAll = async (req, res) => {

  try {
    const task = await Task.findAll();
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findOne = async (req, res) => {
  const {id} = req.body
  try {
    const task = await Task.findOne({
      where: {
        id
      }
    })
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.update = async (req, res) => {
  const {title , description } = req.body
  try {
    const task = await Task.update({data}, {
      where: {
        id
      }
    })
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.delete = async (req, res) => {
  const {id} = req.body
  try {
    const task = await Task.delete({
      where: {
        id
      }
    })
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

