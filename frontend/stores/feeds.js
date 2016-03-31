var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var FeedsConstants = require('../constants/feeds_constants');

var _feeds = {};

var FeedsStore = new Store(AppDispatcher);

var resetFeeds = function (feeds) {
  _feeds = {};

  feeds.forEach(function (feed) {
    _feeds[feed.id] = feed;
  });
};

FeedsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FeedsConstants.RECEIVE_FEEDS:
      resetFeeds(payload.feeds);
      FeedsStore.__emitChange();
      break;
  }
};

FeedsStore.all = function () {
  var feeds = [];

  for (var id in _feeds) {
    if (_feeds.hasOwnProperty(id)) {
      feeds.push(_feeds[id]);
    }
  }
  return feeds;
};

module.exports = FeedsStore;
