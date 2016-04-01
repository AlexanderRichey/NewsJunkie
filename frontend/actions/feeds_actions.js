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
  }
};

module.exports = FeedsActions;
