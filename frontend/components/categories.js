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
    // Do if user has categories
    if (this.state.categories) {
      var categories = this.state.categories.map(function (category, idx) {
        // Do if user's category has feeds
        if (category.feeds) {
          var feeds = category.feeds.map(function (feed, fidx) {
            return (
              <li key={fidx}>
                { feed.name }
                <Link to=
                  { '/edit_feed/' + feed.id + "/" + category.id }>
                  Edit
                </Link>
              </li>
            );
          })
        }

        return (
          <div className="category-item" key={idx}>
            <div className="icon"></div>
            <div className="category-text">{ category.name }</div>
            <div className="category-edit">
              <Link to={ '/edit_category/' + category.id }>Edit</Link>
            </div>
            <ul className="feeds-container">
              { feeds }
            </ul>
          </div>
        );
      });
    }

    return (
      <div className="content-categories-container group">
        <div className="categories-list">
          { categories }
        </div>
        <div className="categories-add">
          <Link to={ '/add_category' }>Add Category</Link>
        </div>
      </div>
    );
  }
});

module.exports = Categories;
