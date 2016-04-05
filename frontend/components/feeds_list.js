var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var CategoriesStore = require('../stores/categories'),
    Util = require('../util/api_util'),
    FeedItem = require('./feed_item');

var FeedsList = React.createClass({
  render: function () {
    var feeds = CategoriesStore.feeds(this.props.categoryId);

    if (feeds.length > 0) {
      var feedsList = feeds.map(function (feed, idx) {
        return (
          <FeedItem key={idx} feed={feed} categoryId={this.props.categoryId} />
        );
      }.bind(this));
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
