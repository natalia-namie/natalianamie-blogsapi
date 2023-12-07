const BlogPost = require("./BlogPost");

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            references: { model: 'BlogPost',key: 'id' },
            field: 'post_id',
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: { model: 'Category', key: 'id' },
            field: 'category_id',
        },
    },{
        timestamps: false,
        tableName: 'posts_categories',
        underscored: true,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }

    return PostCategory;
}