var React = require('react');

var Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories');

var EditCategoryForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { name: "" }
    );
  },
  componentDidMount: function () {
    this.setStateFromStore();
  },
  componentWillReceiveProps: function (newProps) {
    var category = CategoriesStore.find(newProps.params.id);

    this.setState({ name: category.name });
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
      { name: this.state.name, id: this.props.routeParams.id }
    };

    Util.editCategory(categoryInfo)
    this.context.router.push("/")
  },
  deleteCategory: function (e) {
    e.preventDefault();
    var categoryInfo = { category:
      { name: this.state.name, id: this.props.routeParams.id }
    };

    Util.deleteCategory(categoryInfo);
    this.context.router.push("/")
  },
  render: function () {
    return (
      <div className="main-container">
        <div className="form-container">
          <form onSubmit={this.editCategory}>
            <input type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
              placeholder="Name" />

            <div className="form-controls">
              <button>Edit Category</button>

              <button className="button-danger"
                onClick={this.deleteCategory}>
                Delete
              </button>
            </div>

          </form>
        </div>
      </div>

    );
  }
});

module.exports = EditCategoryForm;
