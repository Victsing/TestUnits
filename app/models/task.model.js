module.exports = (sequelize, Sequelize) => {
   const task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })

  task.associate = function(models) {
    task.hasOne(models.list, {
      foreignKey: 'userId',
      as: 'loginDetails'
    });
  }
  
  return task;
}
