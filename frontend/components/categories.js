var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories'),
    CategoriesActions = require('../actions/categories_actions'),
    FeedsList = require('./feeds_list'),
    CategoryItem = require('./category_item');

var Categories = React.createClass({
  getInitialState: function () {
    return (
      {}
    );
  },
  componentDidMount: function () {
    Util.fetchCategories();
    this.categoriesStoreToken =
      CategoriesStore.addListener(this.setStateFromStore);
  },
  setStateFromStore: function () {
    this.setState( { categories: CategoriesStore.all() } );
  },
  componentWillUnmount: function () {
    this.categoriesStoreToken.remove();
  },
  render: function () {
    if (this.state.categories) {
      var categories = this.state.categories.map(function (category, idx) {
        return (
          <CategoryItem key={idx} categoryId={category.id} />
        );
      });
    }

    return (
      <div className="categories-container group">
        <ul className="categories-list">
          { categories }
        </ul>
        <div className="sidebar-button">
          <Link to={ '/add_category' }>Add Category</Link>
        </div>
      </div>
    );
  }
});

module.exports = Categories;
