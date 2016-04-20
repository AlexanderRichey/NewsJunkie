var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher');

var ArticlesConstants = require('../constants/articles_constants');

var aboutBlurb = {
  article_id  :  1,
  body        :
    "<img src='https://s3.amazonaws.com/NEWSJUNKIE-PROD/welcome.png'><p>Hello! Thanks for checking out NewsJunkie. This website is a clone of Feedly, the RSS feed aggregator that lets you curate your own newsfeed and read articles in a beautiful, cleanly designed format. Don't know what RSS is? Check out <a href='https://en.wikipedia.org/wiki/RSS'>Wikipedia</a>.</p><p>To lean more about this website and how I made it, check out the <strong><a href='https://github.com/AlexanderRichey/NewsJunkie'>repo</a></strong> on GitHub. To learn more about me and my other projects, check out my <strong><a href='http://alexrichey.com/'>personal website</a></strong>. Otherwise, you can get started by clicking <em>Add Content</em> to the left.</p><p>Thanks for reading!</p>",
  feed_id     :  1,
  feed_name   :  "Alex Richey",
  image_url   :  "https://s3.amazonaws.com/NEWSJUNKIE-PROD/welcome.png",
  pubDate     :  "2016-01-01",
  title       :  "About This Website",
  url         :  "http://alexrichey.com/about"
};

var _articles = {};
var _orderedArticles = [aboutBlurb];

var ArticlesStore = new Store(Dispatcher);

var resetArticles = function (articles) {
  _articles = {};
  _orderedArticles = [aboutBlurb];

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
