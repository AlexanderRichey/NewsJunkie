var Dispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionActions = {
  currentUserReceived: function(currentUser) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },
  logout: function() {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  },
  renderErrorMessage: function (message) {
    Dispatcher.dispatch({
      actionType: SessionConstants.ERROR,
      error: message
    });
  }
};

module.exports = SessionActions;
