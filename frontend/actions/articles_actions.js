var Dispatcher = require('../dispatcher/dispatcher'),
    ArticlesConstants = require('../constants/articles_constants');

var ArticlesActions = {
  receiveArticles: function (articles) {
    Dispatcher.dispatch({
      actionType: ArticlesConstants.RECEIVE_ARTICLES,
      articles: articles
    });
  }
};

module.exports = ArticlesActions;
