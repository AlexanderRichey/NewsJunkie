var React = require('react');

var HeaderStore = require('../stores/header'),
    Search = require('./search'),
    Controls = require('./controls');

var Header = React.createClass({
  getInitialState: function () {
    return ({ header: "NewsJunkie" })
  },
  componentDidMount: function () {
    this.setState({ header: HeaderStore.header() });
    this.headerStoreToken = HeaderStore.addListener(this.setStateFromStore);
  },
  setStateFromStore: function () {
    this.setState({ header: HeaderStore.header() });
  },
  componentWillUnmount: function () {
    this.headerStoreToken.remove();
  },
  render: function () {
    return (
      <header className="content group">
        <h1>{this.state.header}</h1>
        <Search />
        <Controls />
      </header>
    );
  }
});

module.exports = Header;
