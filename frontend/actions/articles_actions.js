var Dispatcher = require('../dispatcher/dispatcher'),
    ArticlesConstants = require('../constants/articles_constants');

var ArticlesActions = {
  receiveArticles: function (articlesData) {
    Dispatcher.dispatch({
      actionType: ArticlesConstants.RECEIVE_ARTICLES,
      articles: articlesData.articles,
      meta: articlesData.meta
    });
  },
};

module.exports = ArticlesActions;
