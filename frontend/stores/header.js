var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var _header = "";

var HeaderStore = new Store(Dispatcher);

var updateHeader = function (newHeader) {
  _header = newHeader;
};

HeaderStore.header = function () {
  return _header;
};

HeaderStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "UPDATE_HEADER":
      updateHeader(payload.header);
      HeaderStore.__emitChange();
      break;
  }
};

module.exports = HeaderStore;
