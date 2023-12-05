'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      userName: {
        type: Sequelize.STRING, // varchar(255)
        allowNull: false,
        field: 'display_name',
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'email',
        unique: true,
      },
      userPassword: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'password',
      },
      userImage: {
        type: Sequelize.STRING,
        field: 'image',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users')
  }
};
