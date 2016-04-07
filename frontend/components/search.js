var React = require('react');

var Util = require('../util/api_util'),
    ArticlesStore = require('../stores/articles');

var Search = React.createClass({
  getInitialState: function () {
   return { query: "" };
  },
  componentDidMount: function () {
    this.articlesStoreToken = ArticlesStore.addListener(this.setStateFromStore)
  },
  componentWillUnmount: function () {
   this.articlesStoreToken.remove();
  },
  setStateFromStore: function () {
   this.setState({ results: ArticlesStore.all() });
  },
  handleInputChange: function (e) {
   var query = e.currentTarget.value;

   this.setState({ query: query }, function () {
     if (query.length > 2) {
       this.search();
     }
   }.bind(this));
  },
  search: function (e) {
   Util.search(this.state.query, 1);
  },
  render: function () {
    return (
      <div className="search">
        <input type="text"
          placeholder="Search"
          onChange={ this.handleInputChange } />
      </div>
    );
  }
});

 module.exports = Search
