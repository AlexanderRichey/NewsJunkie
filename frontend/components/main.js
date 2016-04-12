var React = require('react');

var Header = require('./header'),
    Articles = require('./articles'),
    Util = require('../util/api_util'),
    HeaderStore = require('../stores/header');

var Main = React.createClass({
  componentDidMount: function () {
    Util.fetchTodaysArticles();
  },
  handleScroll: function (e) {
    if ( $(this.refs.articles).scrollTop() +
            $(this.refs.articles).innerHeight() >=
            $(this.refs.articles)[0].scrollHeight ) {
      this.getMoreArticles();
    }
  },
  getMoreArticles: function (e) {
    currentMeta = HeaderStore.meta();
    nextPage = currentMeta.page + 1;

    switch (currentMeta.contentType) {
      case "Today":
        Util.fetchTodaysArticles(nextPage);
        break;
      case "All":
        Util.fetchArticlesByUser(nextPage);
        break;
      case "Category":
        Util.fetchArticlesByCategory(currentMeta.id, nextPage);
        break;
      case "Feed":
        Util.fetchArticlesByFeed(currentMeta.id, nextPage);
        break;
      case "Read":
        Util.fetchReadArticles(nextPage);
        break;
    }
  },
  render: function () {
    return (
      <div className="main-container group" onScroll={this.handleScroll}>
        <div className="content" ref="articles">
          <Header />
          <Articles />
        </div>
      </div>
    );
  }
});

module.exports = Main;
