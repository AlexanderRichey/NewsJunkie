var Dispatcher = require('../dispatcher/dispatcher'),
    FeedsConstants = require('../constants/feeds_constants');

var FeedsActions = {
  receiveAll: function (feeds) {
    Dispatcher.dispatch({
      actionType: FeedsConstants.RECEIVE_FEEDS,
      feeds: feeds
    });
  },
};

module.exports = FeedsActions;
