var Dispatcher = require('../dispatcher/dispatcher'),
    FeedsConstants = require('../constants/feeds_constants');

var FeedsActions = {
  receiveAll: function (feeds) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.RECEIVE_FEEDS,
      feeds: feeds
    });
  },
  receiveFeed: function (feed) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.RECEIVE_FEED,
      feed: feed
    });
  },
  editFeed: function (feed) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.EDIT_FEED,
      feed: feed
    });
  },
  unsubscribe: function (feed) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.UNSUBSCRIBE,
      feed: feed
    });
  }
};

module.exports = FeedsActions;
