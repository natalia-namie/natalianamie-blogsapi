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
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'title',
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'content',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        field: 'user_id',
      },
      published: {
        type: Sequelize.DATE,
        field: 'published',
      },
      updated: {
        type: Sequelize.DATE,
        field: 'updated',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('blog_posts')
  }
};
