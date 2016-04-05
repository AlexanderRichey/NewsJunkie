var React = require('react');

var FeedsConstants = require('../actions/feeds_actions'),
    Util = require('../util/api_util'),
    CategoriesStore = require('../stores/categories');

var FeedForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return (
      { url: "",
        selectedCategory: "",
        categories: "" }
    );
  },
  componentDidMount: function () {
    this.getCategoriesFromStore();
    this.setState({ selectedCategory: CategoriesStore.all()[0].id });

    this.categoriesStoreToken =
      CategoriesStore.addListener(this.getCategoriesFromStore);
  },
  getCategoriesFromStore: function () {
    this.setState({ categories: CategoriesStore.all() })
  },
  componentWillUnmount: function () {
    this.categoriesStoreToken.remove();
  },
  handleUrlChange: function (e) {
    this.setState({ url: e.currentTarget.value });
  },
  handleCategoryChange: function (e) {
    this.setState({ selectedCategory: e.currentTarget.value });
  },
  createFeed: function () {
    var feedInfo = { feed:
                      { url: this.state.url,
                        category: this.state.selectedCategory }
                    };

    Util.createFeed(feedInfo);
    this.context.router.push("/");
  },
  render: function () {
    if (this.state.categories) {
      var options = this.state.categories.map(function (category, idx) {
        return (
          <option key={idx} value={category.id}>{category.name}</option>
        );
      });
    }

    return (
      <div className="main-container">
        <div className="form-container">
          <form onSubmit={this.createFeed}>
            <input type="text"
              onChange={this.handleUrlChange}
              value={this.state.url}
              placeholder="Feed URL" />

            <div className="form-controls group">
              <select onChange={this.handleCategoryChange}>
                {options}
              </select>

              <button>Subscribe</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
});

module.exports = FeedForm;
