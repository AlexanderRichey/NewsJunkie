var React = require('react');

var Sidebar = require('./sidebar'),
    Main = require('./main'),
    SessionStore = require('../stores/sessions');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      currentUser: null
    };
  },
  componentDidMount: function () {
    this.sessionStoreToken = SessionStore.addListener(this.handleChange);
    this.handleChange();
  },
  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },
  handleChange: function() {
    if (SessionStore.isLoggedIn()) {
      this.setState({ currentUser: SessionStore.currentUser() });
    } else {
      this.context.router.push("/login");
    }
  },
  render: function () {
    return(
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
