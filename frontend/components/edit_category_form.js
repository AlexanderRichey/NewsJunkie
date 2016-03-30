var React = require('react');

var Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories');

var EditCategoryForm = React.createClass({
  getInitialState: function () {
    return (
      { name: "" }
    );
  },
  componentDidMount: function () {
    this.setStateFromStore();
  },
  setStateFromStore: function () {
    var category = CategoriesStore.find(this.props.params.id);

    this.setState({ name: category.name });
  },
  handleNameChange: function (e) {
    this.setState({ name: e.currentTarget.value });
  },
  editCategory: function (e) {
    e.preventDefault();
    var categoryInfo = { category:
      { name: this.state.name, id: this.props.params.id }
    };

    Util.editCategory(categoryInfo)
  },
  deleteCategory: function (e) {
    e.preventDefault();
    debugger
    Util.deleteCategory();
  },
  render: function () {
    return (
      <div className="edit-category">
        <form className="form-edit-category" onSubmit={this.editCategory}>
          <input type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
            placeholder="Name" />

          <button>Edit Category</button>
        </form>

        <form className="form-delete-category" onSubmit={this.deleteCategory}>
          <button className="button-danger">Delete</button>
        </form>
      </div>
    );
  }
});

module.exports = EditCategoryForm;
