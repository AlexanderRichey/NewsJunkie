var React = require('react'),
    ReactRouter = require('react-router');

var HeaderStore = require('../stores/header'),
    Util = require('../util/api_util');

var Controls = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  refresh: function () {
    Util.refresh(function () {
      Util.fetchTodaysArticles();
    });
  },
  markAllAsRead: function () {
    var metaData = HeaderStore.meta();
    debugger;
    Util.markAllAsRead(metaData, function () {
      Util.fetchReadArticles();
    });
  },
  render: function () {
    return (
      <div className="controls">
        <button className="refresh" onClick={this.refresh} />
        <button className="mark-as-read" onClick={this.markAllAsRead} />
      </div>
    );
  }
});

module.exports = Controls;
