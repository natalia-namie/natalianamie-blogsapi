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
      blogPostsId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      blogPostsTitle: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'title',
      },
      blogPostsContent: {
        allowNull: false,
        type: Sequelize.TEXT,
        field: 'content',
      },
      blogPostsUserId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id'},
        field: 'user_id',
      },
      blogPostsPublished: {
        type: Sequelize.DATE,
        field: 'published',
      },
      blogPostsUpdated: {
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
