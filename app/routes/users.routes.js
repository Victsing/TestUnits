module.exports = app => {
  const User = require("../controllers/users.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", User.create);

  // Retrieve all Users
  router.get("/", User.findAll);

  // Retrieve a single User with id
  router.get("/:id", User.findOne);

  // Update a User with id
  router.put("/:id", User.update);

  // Delete a User with id
  router.delete("/:id", User.delete);

  // Delete all Users

  app.use('/api/User', router);
};
