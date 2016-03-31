var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="content-main-container group">
        <div className="articles">
          I am the main
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
