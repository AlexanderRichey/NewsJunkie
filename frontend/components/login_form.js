var React = require('react'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link;

var Util = require('../util/api_util'),
    SessionStore = require('../stores/sessions');

var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      email: "",
      password: "",
      active: false,
      error: null
    };
  },
  componentDidMount: function () {
    this.sessionStoreToken = SessionStore.addListener(this.renderErrorMessage);
  },
  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },
  renderErrorMessage: function (message) {
    this.setState({ error: SessionStore.errors(),
                    active: false });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({ active: true })

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
  demoLogin: function () {
    this.setState({ email: 'demo',
                    password: 'password' });
  },
  buttonData: function () {
    if (this.state.active === false) {
      return { class: "auth-submit", text: "Login" };
    } else {
      return { class: "auth-submit-load", text: "Loading the latest news..." };
    }
  },
  render: function() {
    var buttonClass = this.buttonData()['class'];
    var buttonText = this.buttonData()['text'];

    return (
      <div>
        <header>
          <h1 className="logo">NewsJunkie</h1>
        </header>

        <div className="auth-box group">

          <div className="auth-image" />

          <h2>Welcome back.<br />Login to get your fix.</h2>

          <p className="error">
            {this.state.error}
          </p>

          <form onSubmit={this.handleSubmit}>
            <input
              ref="email"
              type="text"
              onChange={this.updateName}
              placeholder="Email"
              className="auth-email" />

            <input
              ref="password"
              type="password"
              onChange={this.updatePassword}
              placeholder="Password"
              className="auth-password" />

            <button className={buttonClass}>
              {buttonText}
            </button>

            <button onClick={this.demoLogin}
              className={buttonClass}>
              Demo
            </button>
          </form>

          <a className="auth-facebook"
            href="/auth/facebook">
            Login with Facebook
          </a>

          <p className="auth-signup-link">
            <a href="users/new">Create An Account</a>
          </p>
        </div>
      </div>
    );
  },
});

module.exports = LoginForm;
