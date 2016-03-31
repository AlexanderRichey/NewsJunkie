var React = require('react');

var Util = require('../util/api_util');

var CategoryForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { name: "" }
    );
  },
  handleNameChange: function (e) {
    this.setState({ name: e.currentTarget.value });
  },
  createCategory: function (e) {
    e.preventDefault()

    var categoryName = { category: { name: this.state.name } }

    Util.createCategory(categoryName)
    this.context.router.push("/")
  },
  render: function () {
    return (
      <form className="form-add-category" onSubmit={this.createCategory}>
        <input type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
          placeholder="Name" />

        <br />
        <button>Add Category</button>
      </form>
    );
  }
});

module.exports = CategoryForm;
