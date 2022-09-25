module.exports = (sequelize, _DataTypes) => {
	const PostCategory = sequelize.define(
		'PostCategory',
		{},
		{
			timestamps: false,
			tableName: 'posts_categories',
			underscored: true,
		}
	);

	PostCategory.associate = ({ BlogPost, Category }) => {
		BlogPost.belongsToMany(Category, {
      through: PostCategory,
			foreignKey: 'post_id',
			otherKey: 'category_id',
			as: 'posts',
		});

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
			foreignKey: 'category_id',
			otherKey: 'post_id',
			as: 'categories',
    })
	};

	return PostCategory;
};
