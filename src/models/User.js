module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true, // Define a coluna 'id' como chave primária
        autoIncrement: true 
      },
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
  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId', as: 'blogPosts'
    })
  }

  return User;
}