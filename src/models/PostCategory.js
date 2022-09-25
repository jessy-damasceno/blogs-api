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
