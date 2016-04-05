var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var ArticlesConstants = require('../constants/articles_constants');

var _meta = { contentType: "", id: "", page: "", header: "" };
// contentTypes: [today, all, category, feed]

var HeaderStore = new Store(Dispatcher);

var updateMeta = function (metaData) {
  _meta = metaData;
};

HeaderStore.header = function () {
  return _meta.header;
};

HeaderStore.meta = function () {
  return _meta;
};

HeaderStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticlesConstants.RECEIVE_ARTICLES:
      updateMeta(payload.meta);
      HeaderStore.__emitChange();
      break;
  }
};

module.exports = HeaderStore;
