const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const Users = require('../users')

exports.create = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    age,
  } = req.body

  try {
    const check = User.findAll({
      limit: 1,
      order: [
        ['createdAt' , 'DESC']
      ]
    })

    const user = await User.create({
      firstname,
      lastname,
      email,
      password,
      age,
    })
    res.json({ status: true, check})
  } catch (e) {
    res.json({ status: false, e })
  }
};

exports.findAll = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({ status: true, user })
  } catch (e) {
    res.json({ status: false, e })
  }
};

exports.findOne = async (req, res) => {
  const { id } = req.body
  console.log(id)
  try {
    const user = await User.findOne({
      where: {
        id
      }
    })
    res.json({ status: true, user })
  } catch (e) {
    res.json({ status: false, e })
  }
};

exports.update = async (req, res) => {
  const { data } = req.body
  try {
    const user = await User.update({ data }, {
      where: {
        id
      }
    })
    res.json({ status: true, user })
  } catch (e) {
    res.json({ status: false, e })
  }
};

exports.delete = async (req, res) => {
  const { id } = req.body
  try {
    const user = await User.delete({
      where: {
        id
      }
    })
    res.json({ status: true, user })
  } catch (e) {
    res.json({ status: false, e })
  }
};


exports.deleteAll = async (req, res) => {
  try {
    const user = await User.destroy()
    res.json({ status: true, user })
  } catch (e) {
    res.json({ status: false, e })
  }
};

