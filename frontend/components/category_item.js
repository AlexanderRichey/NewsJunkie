var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var CategoriesStore = require('../stores/categories'),
    FeedsList = require('./feeds_list'),
    Util = require('../util/api_util');

var CategoryItem = React.createClass({
  getInitialState: function () {
    return ({ showFeeds: false })
  },
  toggleFeedsShow: function () {
    if (this.state.showFeeds) {
      this.setState({ showFeeds: false })
    } else {
      this.setState({ showFeeds: true })
    }
  },
  loadArticles: function () {
    Util.fetchArticlesByCategory(this.props.categoryId);
  },
  render: function () {
    var category = CategoriesStore.find(this.props.categoryId);

    if (this.state.showFeeds) {
      var feedsList = <FeedsList categoryId={category.id} />;
      var iconClass = "list-icon-show";
    } else {
      feedsList = null;
      iconClass = "list-icon-hide";
    }

    return (
      <li className="category-item">
        <div className={iconClass} onClick={this.toggleFeedsShow}></div>

        <div className="category-title" onClick={this.loadArticles}>
          <Link to={'/'}>{ category.name }</Link>
        </div>

        <div className="category-edit-link">
          <Link to={ '/edit_category/' + category.id }>Edit</Link>
        </div>
        {feedsList}
      </li>
    );
  }
});

module.exports = CategoryItem;
