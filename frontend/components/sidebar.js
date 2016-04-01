var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Categories = require('./categories');

var Sidebar = React.createClass({
  render: function () {
    return (
      <div className="content-sidebar-container group">
        <div className="sidebar-link">
          <Link to={'/'}>Today</Link>
        </div>
        <div className="categories-add">
          <Link to={'/add_feed'}>Add Content</Link>
        </div>
        <Categories />
      </div>
    );
  }
});

module.exports = Sidebar;
