var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var CategoriesStore = require('../stores/categories');

var FeedsList = React.createClass({
  render: function () {
    var feeds = CategoriesStore.feeds(this.props.categoryId);

    if (feeds.length > 0) {
      var feedsList = feeds.map(function (feed, idx) {
        return (
          <li className="feed-item" key={idx}>
            <div className="feed-name">
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
      }.bind(this))
    } else {
      feedsList = (
        <li></li>
      );
    }

    return (
      <ul className="feeds-container">
        { feedsList }
      </ul>
    );
  }
});

module.exports = FeedsList;
