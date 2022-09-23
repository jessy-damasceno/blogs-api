'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('posts_categories', {
			post_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'blog_posts',
					key: 'id',
				},
			},
			category_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'categories',
					key: 'id',
				},
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('posts_categories');
	},
};
