module.exports = (Sequelize, DataTypes) => {
  const BlogPost = Sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      autoIcrement: true,
      type: DataTypes.INTEGER,
    },
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE }

  },
  {
    underscored: true,
    tableName: 'blog_posts',
    createdAt: 'published',
    updatedAt: 'updated'
  })

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'userId', as: 'user'
    })
  }

  return BlogPost;
}