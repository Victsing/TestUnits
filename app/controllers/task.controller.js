const db = require("../models");
const task = db.tasks;
const Op = db.Sequelize.Op;

// Create and Save a new task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a task
  const task = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save task in the database
  task.create(task)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the task."
      });
    });
};

// Retrieve all tasks from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  task.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Find a single task with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  task.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving task with id=" + id
      });
    });
};

// Update a task by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  task.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "task was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update task with id=${id}. Maybe task was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating task with id=" + id
      });
    });
};

// Delete a task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete task with id=${id}. Maybe task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete task with id=" + id
      });
    });
};

// Delete all tasks from the database.
exports.deleteAll = (req, res) => {
  task.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} tasks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tasks."
      });
    });
};

// find all published task
exports.findAllPublished = (req, res) => {
  task.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};
