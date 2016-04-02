var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Categories = require('./categories');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="sidebar-container group">
        <div className="sidebar-link">
          <Link to={'/'}>Today</Link>
        </div>
        <div className="sidebar-button">
          <Link to={'/add_feed'}>Add Content</Link>
        </div>
        <Categories />
      </div>
    );
  }
});

module.exports = Sidebar;
