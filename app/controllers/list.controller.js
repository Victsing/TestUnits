const db = require("../models");
const List = db.lists;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  const {data} = req.body
  console.log(data)
  try {
    const list = await List.create({data})
    res.json({status: true, list})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findAll = async (req, res) => {
  console.log(data)

  try {
    const list = await List.findAll();
    res.json({status: true, list})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.findOne = async (req, res) => {
  console.log(data)

  const {id} = req.body
  try {
    const list = await List.findOne({
      where: {
        id
      }
    })
    res.json({status: true, list})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.update = async (req, res) => {
  const {data} = req.body
  try {
    const list = await List.update({data}, {
      where: {
        id
      }
    })
    res.json({status: true, list})
  } catch (e) {
    res.json({status: false, e})
  }
};

exports.delete = async (req, res) => {
  const {id} = req.body
  try {
    const list = await List.detele({
      where: {
        id
      }
    })
    res.json({status: true, list})
  } catch (e) {
    res.json({status: false, e})
  }
};

