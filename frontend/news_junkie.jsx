var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('main'));
});
