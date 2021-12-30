module.exports = app => {
  const User = require("../controllers/users.controller.js");

  var router = require("express").Router();

  router.post("/", User.create);

  router.get("/", User.findAll);

  router.get("/:id", User.findOne);

  router.put("/:id", User.update);

  router.delete("/:id", User.delete);

  router.delete("/delete", User.deleteAll);

  
  app.use('/api/users', router);
};
