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
  editFeed: function (categorizedFeedData) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.EDIT_FEED,
      feed: categorizedFeedData.feed,
      oldCategoryId: categorizedFeedData.oldCategoryId,
      newCategoryId: categorizedFeedData.newCategoryId
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
