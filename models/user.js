export default (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    Username: {
      type: DataTypes.STRING,
      unique: true,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
    },
    Password: DataTypes.STRING,
  });

  User.associate = (models) => {
      User.belongsToMany(models.Team, {
          through: 'member',
          foreignKey: 'userId',
      })
  };

  return User;
};
