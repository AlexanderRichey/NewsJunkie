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
  markAsRead: function (result) {
    Dispatcher.dispatch({
      actionType: ArticlesConstants.MARK_AS_READ,
      articleId: result.article_id
    });
  },
  markAllAsRead: function () {
    Dispatcher.dispatch({
      actionType: ArticlesConstants.MARK_ALL_AS_READ,
    });
  }
};

module.exports = ArticlesActions;
