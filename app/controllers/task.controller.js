const db = require("../models");
const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const {data} = req.body
  console.log(data)
  try {
    const task = await Task.create({data})
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findAll = async (req, res) => {
  console.log(data)

  try {
    const task = await Task.findAll();
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findOne = async (req, res) => {
  console.log(data)

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
  const {data} = req.body
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
    const task = await Task.detele({
      where: {
        id
      }
    })
    res.json({status: true, task})
  } catch (e) {
    res.json({status: false, e})
  }
};

