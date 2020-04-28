export default (sequelize, DataTypes) => {
  const Channel = sequelize.define("channel", {
    Name: DataTypes.STRING,
    Public: DataTypes.BOOLEAN,
  });

  Channel.associate = (models) => {
      // 1:M
      Channel.belongsTo(models.Team, {
          foreignKey: 'teamId',
      });
  };

  return Channel;
};
