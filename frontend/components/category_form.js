var React = require('react');

var Util = require('../util/api_util');

var CategoryForm = React.createClass({
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
  },
  render: function () {
    return (
      <form className="form-add-category" onSubmit={this.createCategory}>
        <input type="text"
          onChange={this.handleNameChange}
          value={this.state.name}
          placeholder="Name" />

        <button>Add Category</button>
      </form>
    );
  }
});

module.exports = CategoryForm;
