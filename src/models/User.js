module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: DataTypes.INT,
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  },
  )

  return User;
}