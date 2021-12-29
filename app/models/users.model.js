module.exports = (sequelize, Sequelize) => {
  return sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.DATE,
      allowNull: false
    },

  })
}
