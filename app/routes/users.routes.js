module.exports = app => {
  const User = require("../controllers/users.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", User.create);

  // Retrieve all Tutorials
  router.get("/", User.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", User.findOne);

  // Update a Tutorial with id
  router.put("/:id", User.update);

  // Delete a Tutorial with id
  router.delete("/:id", User.delete);

  // Delete all Tutorials
  router.delete("/", User.deleteAll);

  app.use('/api/User', router);
};
