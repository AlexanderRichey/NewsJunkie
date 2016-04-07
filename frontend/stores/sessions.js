var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(Dispatcher);

var _currentUser;
var _currentUserHasBeenFetched = false;
var _errors;

SessionStore.errors = function () {
  return _errors;
};

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.isLoggedIn = function () {
  return !!_currentUser;
};

SessionStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserHasBeenFetched = true;
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _currentUser = null;
      SessionStore.__emitChange();
      break;
    case SessionConstants.ERROR:
      _errors = payload.error;
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
