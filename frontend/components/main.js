var React = require('react');

var Header = require('./header'),
    Articles = require('./articles');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container group">
        <div className="content">
          <Header />
          <Articles />
        </div>
      </div>
    );
  }
});

module.exports = Main;
