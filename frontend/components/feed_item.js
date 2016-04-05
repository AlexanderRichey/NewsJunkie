var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var CategoriesStore = require('../stores/categories'),
    Util = require('../util/api_util');

var FeedItem = React.createClass({
  onClick: function () {
    Util.fetchArticles(parseInt(this.props.feed.id));
  },
  render: function () {
    var feed = this.props.feed;

    return (
      <li className="feed-item">
        <div className="feed-name" onClick={this.onClick}>
          { feed.name }
        </div>

        <div className="feed-edit-link">
          <Link to=
            { '/edit_feed/' + feed.id + "/" + this.props.categoryId }>
            Edit
          </Link>
        </div>
      </li>
    );
  }
});

module.exports = FeedItem;
