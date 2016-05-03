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
        categories: "",
        error: null }
    );
  },
  componentDidMount: function () {
    this.getCategoriesFromStore();
    this.setState({ selectedCategory: CategoriesStore.all()[0].id });

    this.categoriesStoreToken =
      CategoriesStore.addListener(this.getCategoriesFromStore);
  },
  getCategoriesFromStore: function () {
    if (CategoriesStore.all().length === 0) {
      Util.fetchCategories();
    }

    this.setState({ categories: CategoriesStore.all() });
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
  createFeed: function (e) {
    e.preventDefault();

    if (this.state.url.length < 10) {
      this.renderUrlError()
      return;
    } else if (CategoriesStore.feedUrls().includes(this.state.url)) {
      this.renderSubError();
      return;
    }

    var feedInfo = { feed:
                      { url: this.state.url,
                        category: this.state.selectedCategory }
                    };

    Util.createFeed(feedInfo);
    this.context.router.push("/");
  },
  renderUrlError: function () {
    this.setState({ error: "That does not seem to be a valid feed url..." })
  },
  renderSubError: function () {
    this.setState({ error: "You are aleady subscribed to that feed..." })
  },
  starterPacks: {
    0: "http://feeds.feedburner.com/TheAtlantic?format=xml",
    1: "http://www.theverge.com/rss/index.xml",
    2: "http://www.blueshirtbanter.com/rss/current",
    3: "http://www.booooooom.com/blog/art/feed/"
  },
  subscribeToPack: function (num) {
    if (CategoriesStore.feedUrls().includes(this.starterPacks[num])){
      this.renderSubError();
      return;
    } else {
      Util.createFeed({feed:
        {url: this.starterPacks[num], category: CategoriesStore.all()[num].id}
      });

      this.context.router.push("/");
    }
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
          <p className="error">
            {this.state.error}
          </p>

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

          <span className="starter-pack-instruct">
            Subscribe to an RSS feed above or add a Starter Pack below...
          </span>

          <div className="starter-pack-grid">
            <div className='square-box'
              onClick={this.subscribeToPack.bind(null, 0)}>
              <div className='square-content'>
                <div>
                  <span>News & Politics</span>
                </div>
              </div>
            </div>

            <div className='square-box'
              onClick={this.subscribeToPack.bind(null, 1)}>
              <div className='square-content'>
                <div>
                  <span>Tech</span>
                </div>
              </div>
            </div>

            <div className='square-box'
              onClick={this.subscribeToPack.bind(null, 3)}>
              <div className='square-content'>
                <div>
                  <span>Random, lol</span>
                </div>
              </div>
            </div>

            <div className='square-box'
              onClick={this.subscribeToPack.bind(null, 2)}>
              <div className='square-content'>
                <div>
                  <span>NY Sports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeedForm;
