module.exports = app => {
  const task = require("../controllers/task.controller.js");
  const TaskClass = require('../task')
  var router = require("express").Router();

  router.post("/", function(req, res){
    console.log(req.body)
    var t = new TaskClass(
      title , description
    )
    t.addItem()
  });

  router.get("/", task.findAll);

  router.get("/:id", task.findOne);

  router.put("/:id", task.update);

  router.delete("/:id", task.delete);

  app.use('/api/task', router);
};
