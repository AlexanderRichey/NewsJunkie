var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories'),
    CategoriesActions = require('../actions/categories_actions');

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
          <li className="category-item" key={idx}>
            {category.name}
            <Link to={'/edit_category/' + category.id}>Edit</Link>
          </li>
        );
      });
    }

    return (
      <div className="content-categories-container group">
        <ul className="categories-list">
          {categories}
          <Link to={'/add_category'}>Add Category</Link>
        </ul>
      </div>
    );
  }
});

module.exports = Categories;
