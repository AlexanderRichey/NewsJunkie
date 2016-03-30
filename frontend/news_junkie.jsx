var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app'),
    Main = require('./components/main'),
    CategoryForm = require('./components/category_form');

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="add_category" component={CategoryForm} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{Routes}</Router>,
    document.getElementById('main')
  );
});
