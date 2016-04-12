var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var ArticlesConstants = require('../constants/articles_constants');

var _articles = {};
var _orderedArticles = [];

var ArticlesStore = new Store(Dispatcher);

var resetArticles = function (articles) {
  _articles = {};
  _orderedArticles = [];

  articles.forEach(function (item) {
    _articles[item.article_id] = item;
    _orderedArticles.push(item);
  });
};

var appendArticles = function (articles) {
  articles.forEach(function (item) {
    _articles[item.article_id] = item;
    _orderedArticles.push(item);
  });
};

var markAsRead = function (articleId) {
  for (var i = 0; i < _orderedArticles.length; i++) {
    if (_orderedArticles[i].article_id === articleId) {
      Object.defineProperty(
        _orderedArticles[i],
        "read",
        {read: true, value: true}
      );

      return;
    }
  }
};

var markAllAsRead = function () {
  for (var i = 0; i < _orderedArticles.length; i++) {
    Object.defineProperty(
      _orderedArticles[i],
      "read",
      {read: true, value: true}
    );
  }
};

ArticlesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticlesConstants.RECEIVE_ARTICLES:
      if (payload.meta.page > 1) {
        appendArticles(payload.articles);
      } else {
        resetArticles(payload.articles);
      }

      ArticlesStore.__emitChange();
      break;
    case ArticlesConstants.MARK_AS_READ:
      markAsRead(parseInt(payload.articleId));
      ArticlesStore.__emitChange();
      break;
    case ArticlesConstants.MARK_ALL_AS_READ:
      markAllAsRead();
      ArticlesStore.__emitChange();
      break;
  }
};

ArticlesStore.all = function () {
  return _orderedArticles;
};

module.exports = ArticlesStore;
