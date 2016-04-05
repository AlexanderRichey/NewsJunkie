var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    Modal = require('react-modal');

var ArticleItem = React.createClass({
  getInitialState: function(){
    return({ modalOpen: false });
  },
  closeModal: function(){
    this.setState({ modalOpen: false })
  },
  openModal: function(){
    this.setState({ modalOpen: true })
  },
  strip: function (dirtyString) {
    var container = document.createElement('div');
    var text = document.createTextNode(dirtyString);
    container.appendChild(text);
    return container.innerHTML;
  },
  style: {
    overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(0, 0, 0, 0.4)',
      },
      content : {
        position        : 'relative',
        float           : 'right',
        width           : '700px',
        height          : '100vh',
        top             :  0,
        left            :  0,
        right           :  0,
        bottom          :  0,
        'border'        : 'none',
        'border-radius' : 0,
        padding         : '20px 60px',
        overflow        : 'scroll'
      }
  },
  render: function () {
    try {
      var body = $(this.props.article.body).text();
    } catch (e) {
      var body = this.strip(this.props.article.body);
    }

    blurb = body.slice(0, 120);

    return (
      <li>
        <div className="article-item" onClick={this.openModal}>
          <div className="article-image"></div>
          <div className="article-content">
            <h2>{this.props.article.title}</h2>
            <span className="blurb">{blurb}</span>
            <span className="meta-data">
              {this.props.article.feed_name} / {this.props.article.pubDate}
            </span>

            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={this.style}>

                <h1>{this.props.article.title}</h1>
                <span className="meta-data">
                  {this.props.article.feed_name} / {this.props.article.pubDate}
                </span>
                <p>{body}</p>
                <a href={this.props.article.url}  target="_blank">
                  Read More
                </a>
            </Modal>
          </div>
        </div>
      </li>
    );
  }
});

module.exports = ArticleItem;
