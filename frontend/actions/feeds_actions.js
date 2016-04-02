var Dispatcher = require('../dispatcher/dispatcher'),
    FeedsConstants = require('../constants/feeds_constants');

var FeedsActions = {
  receiveAll: function (feeds) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.RECEIVE_FEEDS,
      feeds: feeds
    });
  },
  receiveFeed: function (feedData) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.RECEIVE_FEED,
      feed: feedData.feed,
      categoryId: feedData.categoryId
    });
  },
  editFeed: function (subscriptionData) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.EDIT_FEED,
      feed: subscriptionData.feed,
      oldCategoryId: subscriptionData.oldCategoryId,
      newCategoryId: subscriptionData.newCategoryId
    });
  },
  unsubscribe: function (feedData) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.UNSUBSCRIBE,
      feed: feedData.feed,
      categoryId: feedData.categoryId
    });
  }
};

module.exports = FeedsActions;
