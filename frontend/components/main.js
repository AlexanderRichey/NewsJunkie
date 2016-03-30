var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="content-main-container group">
        <span>I am the main</span>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
