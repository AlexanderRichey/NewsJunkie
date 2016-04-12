var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Categories = require('./categories'),
    Util = require('../util/api_util');

var Sidebar = React.createClass({
  loadTodaysArticles: function () {
    Util.fetchTodaysArticles();
  },
  loadReadArticles: function () {
    Util.fetchReadArticles();
  },
  render: function () {
    return (
      <div className="sidebar-container group">
        <ul className="sidebar-top-links">
          <li className="category-item-sandwich"
            onClick={this.loadTodaysArticles}>
            <div className="list-icon-all"></div>
            <div className="category-title">
              <Link className="category-title" to={'/'}>Today</Link>
            </div>
          </li>

          <li className="category-item-sandwich"
            onClick={this.loadReadArticles}>
            <div className="list-icon-all"></div>
            <div className="category-title">
              <Link className="category-title" to={'/'}>Read</Link>
            </div>
          </li>
        </ul>

        <Link to={'/add_feed'}
          className="sidebar-button">
          Add Content
        </Link>

        <Categories />

        <ul className="sidebar-controls">
          <Link to={ '/add_category' }
            className="sidebar-button">
            Add Category
          </Link>

          <div className="sidebar-button">
            <button onClick={Util.logout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    );
  }
});

module.exports = Sidebar;
