module.exports = (sequelize, DataTypes) => {
	const PostCategory = sequelize.define('PostCategory',{
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        foreignKey: true,
      }
    },
		{
			timestamps: false,
			tableName: 'posts_categories',
			underscored: true,
		}
	);

	PostCategory.associate = (models) => {
		models.BlogPost.belongsToMany(models.Category, {
      through: models.PostCategory,
			foreignKey: 'postId',
			otherKey: 'categoryId',
			as: 'posts',
		});

    models.Category.belongsToMany(models.BlogPost, {
      through: models.PostCategory,
			foreignKey: 'categoryId',
			otherKey: 'postId',
			as: 'categories',
    })
	};

	return PostCategory;
};
