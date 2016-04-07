var React = require('react');

var Util = require('../util/api_util'),
    ArticlesStore = require('../stores/articles'),
    ArticleItem = require('./article_item'),
    HeaderStore = require('../stores/header');

var Articles = React.createClass({
  getInitialState: function () {
    return ({ articles: null });
  },
  componentDidMount: function () {
    this.articlesStoreToken = ArticlesStore.addListener(this.setStateFromStore);
  },
  setStateFromStore: function () {
    this.setState({ articles: ArticlesStore.all() })
  },
  componentWillUnmount: function () {
    this.articlesStoreToken.remove();
  },
  spanContent: function () {
    if (HeaderStore.meta().contentType === "Search") {
      return null;
    } else {
      return "Click Add Content to Begin";
    }
  },
  render: function () {
    if (this.state.articles && this.state.articles.length > 0) {
      var articles = this.state.articles.map(function (article, idx) {
        return (
          <ArticleItem key={idx} article={article} />
        );
      });
    } else {
      articles = <span className="welcome">{this.spanContent()}</span>;
    }

    return (
      <div className="articles-container">
        <ul>
          {articles}
        </ul>
      </div>
    );
  }
});

module.exports = Articles;
