var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var CategoriesStore = require('../stores/categories'),
    FeedsList = require('./feeds_list');

var CategoryItem = React.createClass({
  getInitialState: function () {
    return ({ showFeeds: false })
  },
  onClick: function () {
    if (this.state.showFeeds) {
      this.setState({ showFeeds: false })
    } else {
      this.setState({ showFeeds: true })
    }
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
        <div className={iconClass} onClick={this.onClick}></div>
        <div className="category-title">{ category.name }</div>
        <div className="category-edit-link">
          <Link to={ '/edit_category/' + category.id }>Edit</Link>
        </div>
        {feedsList}
      </li>
    );
  }
});

module.exports = CategoryItem;
