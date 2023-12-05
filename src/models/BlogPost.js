module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'title',
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'content',
        },
        userId: {
            type: DataTypes.INTEGER,
            references: { model: 'users', key: 'id'},
            field: 'user_id',
        },
        published: {
            type: DataTypes.DATE,
            field: 'published',
        },
        updated: {
            type: DataTypes.DATE,
            field: 'updated',
        }
    },
    {
        timestamps: false,
        tableName: 'BlogPosts',
        underscored: true,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'users'
        });
    };

    return BlogPost;
}