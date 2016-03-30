var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Categories = require('./categories');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="content-sidebar-container group">
        <Link to={'/'}>Today</Link>
        <Categories />
      </div>
    );
  }
});

module.exports = Sidebar;
