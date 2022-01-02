module.exports = (sequelize, Sequelize) => {
  const list = sequelize.define("lists", {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  })

  list.associate = function(models) {
    list.hasOne(models.users, {
      foreignKey: 'userId',
      as: 'loginDetails'
    });
  }

  return list;
}
