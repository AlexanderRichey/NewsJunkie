var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Categories = require('./categories'),
    Util = require('../util/api_util');

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
        <div className="sidebar-button">
          <button onClick={Util.logout}>Logout</button>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
