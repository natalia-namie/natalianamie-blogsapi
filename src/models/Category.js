module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'name',
        }
    },
    {
        timestamps: false,
        tableName: 'categories',
        underscored: true,
    });

    return Category;
}