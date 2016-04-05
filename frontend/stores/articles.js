var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var ArticlesConstants = require('../constants/articles_constants');

var _articles = {};

var ArticlesStore = new Store(Dispatcher);

var resetArticles = function (articles) {
  _articles = {};

  articles.forEach(function (item) {
    _articles[item.article_id] = item;
  });
};

ArticlesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticlesConstants.RECEIVE_ARTICLES:
      resetArticles(payload.articles);
      ArticlesStore.__emitChange();
      break;
  }
};

ArticlesStore.all = function () {
  var articles = [];

  for (var id in _articles) {
    if (_articles.hasOwnProperty(id)) {
      articles.push(_articles[id]);
    }
  }
  return articles;
};

module.exports = ArticlesStore;
