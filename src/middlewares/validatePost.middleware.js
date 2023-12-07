const isFieldMissing = ({ title, content, categoryIds }) =>
  !title || !content || !categoryIds;
  
const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (isFieldMissing({ title, content, categoryIds })) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};
  
module.exports = {
  validatePost,
};
