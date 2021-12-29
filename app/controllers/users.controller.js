const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const { data } = req.body
  try{
    const user = await User.create({data})
    res.json({status: true , user })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.findAll = (req, res) => {
  try{
    const user = await User.findAll();
    res.json({status: true , user })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.findOne = (req, res) => {
  const { id } = req.body
  try{
    const user = await User.findOne({
      where : {
        id
      }
    })
    res.json({status: true , user })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.update = (req, res) => {
  const { data } = req.body
  try{
    const user = await User.update({data}, {
      where : {
        id
      }
    })
    res.json({status: true , user })
  } catch (e){
    res.json({status: false , e })
  }
};

exports.delete = (req, res) => {
  const { id } = req.body
  try{
    const user = await User.detele({
      where : {
        id
      }
    })
    res.json({status: true , user })
  } catch (e){
    res.json({status: false , e })
  }
};

