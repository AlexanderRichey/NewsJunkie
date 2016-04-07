var React = require('react');

var Util = require('../util/api_util');

var CategoryForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { name: "", error: null }
    );
  },
  handleNameChange: function (e) {
    this.setState({ name: e.currentTarget.value });
  },
  createCategory: function (e) {
    e.preventDefault()
    if (this.state.name === "") {
      this.renderError()
      return;
    }

    var categoryName = { category: { name: this.state.name } }

    Util.createCategory(categoryName)
    this.context.router.push("/")
  },
  renderError: function () {
    this.setState({ error: "Categories must have names..." })
  },
  render: function () {
    return (
      <div className="main-container">
        <div className="form-container">
          <p className="error">
            {this.state.error}
          </p>

          <form onSubmit={this.createCategory}>
            <input type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
              placeholder="Name" />

            <div className="form-controls">
              <button>Add Category</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
});

module.exports = CategoryForm;
