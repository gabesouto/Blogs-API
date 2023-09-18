const { BlogPost, Category, User, PostCategory } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { type: null, message: posts };
};

const postBlog = async ({ title, content, categoryIds }, userId) => {
  const { count } = await Category.findAndCountAll({
    where: { id: categoryIds },
  });
  console.log('🚀 ~ file: blogs.service.js:17 ~ postBlog ~ Count:', count);

  if (count !== categoryIds.length) {
    return {
      type: 400,
      message: 'one or more "categoryIds" not found',
    };
  }
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });

  const newPostCategories = categoryIds.map((id) => ({
    postId: newPost.id,
    categoryId: id,
  }));
  await PostCategory.bulkCreate(newPostCategories);
  return { type: null, message: newPost };
};

module.exports = {
  getAll,
  postBlog,
};
