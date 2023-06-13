const { Category } = require('../models');
// const { generateToken } = require('../JWT/JWT');

const newCategory = async (payload) => {
  const { name } = payload;

  if (!name) {
 return {
     type: 400, message: '"name" is required' }; 
}

  const category = await Category.create({ name });
  // const token = generateToken(category.id);

  return { type: null, message: category };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  newCategory,
  getAll,
};
