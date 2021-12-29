module.exports = (sequelize, Sequelize) => {
  return sequelize.define("task", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
  })
}
