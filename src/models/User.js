module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
          },
          displayName: {
            type: DataTypes.STRING,
            field: 'display_name',
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
            field: 'email',
          },
          password: {
            type: DataTypes.STRING,
            field: 'password',
          },
          image: {
            type: DataTypes.STRING,
            field: 'image',
          }
    },
    {
        timestamps: false,
        tableName: 'users',
        underscored: true,
    });

    User.associate = (models) => {
        User.hasOne(models.BlogPost, {
            foreignKey: 'blogPostsUserId',
            as: 'blog_posts'
        });
    };

    return User;
}