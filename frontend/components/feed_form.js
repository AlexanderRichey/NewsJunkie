var React = require('react');

var FeedsConstants = require('../actions/feeds_actions'),
    Util = require('../util/api_util'),
    FeedsStore = require('../stores/feeds');

var FeedForm = React.createClass({
  componentDidMount: function () {
    Util.fetchFeeds()
    this.feedsStoreToken = FeedsStore.addListener(this.setStateFromStore)
  },
  setStateFromStore: function () {
    this.setState({ feeds: FeedsStore.all() });
  },
  componentWillUnmount: function () {
    this.feedsStoreToken.remove()
  },
  render: function () {
    if (this.state.feeds) {
      var feeds = this.state.feeds.map(function (feed) {
        return (
          <span>{feed.name}</span>
        );
      })
    }

    return (
      {feeds}
    );
  }
});

module.exports = FeedForm;
