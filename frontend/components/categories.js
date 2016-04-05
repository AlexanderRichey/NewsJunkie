var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories'),
    CategoriesActions = require('../actions/categories_actions'),
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
          <li className="category-item-sandwich">
            <div className="list-icon-all"></div>
            <div className="category-title">All</div>
          </li>
          { categories }
        </ul>
      </div>
    );
  }
});

module.exports = Categories;
