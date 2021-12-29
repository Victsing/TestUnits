module.exports = (sequelize, Sequelize) => {
  return sequelize.define("task", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })
}
