var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Util = require('../util/api_util');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;

    Util.login(this.state, function() {
      router.push("/");
    });
  },
  updateName: function(e) {
    this.setState({ email: e.currentTarget.value });
  },
  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  },
  render: function() {
    return (
      <div>
        <header>
          <h1 className="logo">NewsJunkie</h1>
        </header>

        <div className="auth-box group">

          <div className="auth-image" />

          <h2>Welcome back.<br />Login to get your fix.</h2>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.updateName}
              placeholder="Email"
              className="auth-email" />

            <input
              type="password"
              onChange={this.updatePassword}
              placeholder="Password"
              className="auth-password" />

            <button className="auth-submit">Login</button>
          </form>

          <p className="auth-signup-link">
            <a href="users/new">Create An Account</a>
          </p>
        </div>
      </div>
    );
  },
});

module.exports = LoginForm;
