var React = require('react');

var Sidebar = require('./sidebar'),
    Main = require('./main');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
