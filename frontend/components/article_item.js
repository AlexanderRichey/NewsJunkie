var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var ArticleItem = React.createClass({
  strip: function (dirtyString) {
    var container = document.createElement('div');
    var text = document.createTextNode(dirtyString);
    container.appendChild(text);
    return container.innerHTML;
  },
  render: function () {
    try {
      var blurb = $(this.props.article.body).text();
    } catch (e) {
      var blurb = this.strip(this.props.article.body);
    }

    blurb = blurb.slice(0, 120);

    return (
      <li>
        <div className="article-item">
          <div className="article-image"></div>
          <div className="article-content">
            <h2>{this.props.article.title}</h2>
            <span className="blurb">{blurb}</span>
            <span className="meta-data">
              {this.props.article.feed_name} / {this.props.article.pubDate}
            </span>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = ArticleItem;
