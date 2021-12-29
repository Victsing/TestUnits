module.exports = app => {
  const list = require("../controllers/list.controller.js");

  var router = require("express").Router();

  router.post("/", list.create);

  router.get("/", list.findAll);

  router.get("/:id", list.findOne);

  router.put("/:id", list.update);

  router.delete("/:id", list.delete);

  app.use('/api/list', router);
};
