var Dispatcher = require('../dispatcher/dispatcher'),
    ArticlesConstants = require('../constants/articles_constants');

var HeaderActions = {
  updateHeader: function (header) {
    Dispatcher.dispatch({
      actionType: "UPDATE_HEADER",
      header: header
    });
  }
};

module.exports = HeaderActions;
