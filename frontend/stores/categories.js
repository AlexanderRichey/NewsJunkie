var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var CategoriesConstants = require('../constants/categories_constants'),
    FeedsConstants = require('../constants/feeds_constants');

var _categories = {};

var CategoriesStore = new Store(AppDispatcher);

var resetCategories = function (categories) {
  _categories = {};

  categories.forEach(function (category) {
    _categories[category.id] = category;
  });
};

var addCategory = function (category) {
  _categories[category.id] = category;
};

var editCategory = function (category) {
  addCategory(category);
};

var deleteCategory = function (category) {
  delete _categories[category.id];
};

var addFeed = function (feed) {
  var category = CategoriesStore.find(feed.categoryId);
  category.feeds.push(feed.feed);
};

var editFeed = function (feed) {
  removeFeed(feed);
  addFeed(feed);
};

var removeFeed = function (feed) {
  CategoriesStore.removeFeed(feed.feed.id);
};

CategoriesStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CategoriesConstants.RECEIVE_CATEGORIES:
      resetCategories(payload.categories);
      CategoriesStore.__emitChange();
      break;
    case CategoriesConstants.RECEIVE_CATEGORY:
      addCategory(payload.category);
      CategoriesStore.__emitChange();
      break;
    case CategoriesConstants.EDIT_CATEGORY:
      editCategory(payload.category);
      CategoriesStore.__emitChange();
      break;
    case CategoriesConstants.DELETE_CATEGORY:
      deleteCategory(payload.category);
      CategoriesStore.__emitChange();
      break;
    case FeedsConstants.RECEIVE_FEED:
      addFeed(payload.feed);
      CategoriesStore.__emitChange();
      break;
    case FeedsConstants.EDIT_FEED:
      editFeed(payload.feed);
      CategoriesStore.__emitChange();
      break;
    case FeedsConstants.UNSUBSCRIBE:
      removeFeed(payload.feed);
      CategoriesStore.__emitChange();
      break;
  }
};

CategoriesStore.all = function () {
  var categories = [];

  for (var id in _categories) {
    if (_categories.hasOwnProperty(id)) {
      categories.push(_categories[id]);
    }
  }
  return categories;
};

CategoriesStore.find = function (id) {
  return _categories[id];
};

CategoriesStore.removeFeed = function (feedId) {
  for (var id in _categories) {
    for (var j = 0; j < _categories[id].feeds.length; j++) {
      if (_categories[id].feeds[j].id === feedId) {
        debugger;
        delete _categories[id].feeds[j];
        return;
      }
    }
  }
};

module.exports = CategoriesStore;
