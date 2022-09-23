'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('blog_posts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING,
				unique: true,
			},
			user_id: {
				allowNull: false,
				type: Sequelize.STRING,
				references: {
					model: 'users',
					key: 'id',
				},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
			},
			published: {
				allowNull: false,
				type: Sequelize.DATE,
			},
      updated: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('blog_posts');
	},
};
