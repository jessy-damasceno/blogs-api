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

	PostCategory.associate = ({ BlogPost, Category, PostCategory}) => {
		BlogPost.belongsToMany(Category, {
      through: PostCategory,
			foreignKey: 'postId',
			otherKey: 'categoryId',
			as: 'categories',
		});

    Category.belongsToMany(BlogPost, {
      through: PostCategory,
			foreignKey: 'categoryId',
			otherKey: 'postId',
			as: 'posts',
    })
	};

	return PostCategory;
};
