module.exports = (Sequelize, DataTypes) => {
  const PostCategory = Sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      autoIcrement: true,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    categoryId: {
      primaryKey: true,
      autoIcrement: true,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  })

  PostCategory.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })

    model.Category.belongsToMany(model.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  }

  return PostCategory;
}