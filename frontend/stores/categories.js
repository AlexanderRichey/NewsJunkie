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

var addFeed = function (feed, categoryId) {
  var category = CategoriesStore.find(categoryId);
  category.feeds.push(feed);
};

var editFeed = function (feed, oldCategoryId, newCategoryId) {
  removeFeed(feed, oldCategoryId);
  addFeed(feed, newCategoryId);
};

var removeFeed = function (feed, categoryId) {
  CategoriesStore.removeFeed(feed, categoryId);
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
      addFeed(payload.feed, payload.categoryId);
      CategoriesStore.__emitChange();
      break;
    case FeedsConstants.EDIT_FEED:
      editFeed(payload.feed, payload.oldCategoryId, payload.newCategoryId);
      CategoriesStore.__emitChange();
      break;
    case FeedsConstants.UNSUBSCRIBE:
      removeFeed(payload.feed, payload.categoryId);
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

CategoriesStore.feeds = function (categoryId) {
  return CategoriesStore.find(categoryId).feeds;
};

CategoriesStore.feedUrls = function () {
  feedUrls = [];

  CategoriesStore.all().forEach( function (category) {
    category.feeds.forEach( function (feed) {
      feedUrls.push(feed.url);
    });
  });

  return feedUrls;
};

CategoriesStore.removeFeed = function (feed, categoryId) {
  var feedsList = CategoriesStore.find(categoryId).feeds;

  for (var i = 0; i < feedsList.length; i++) {
    if (feedsList[i] === undefined) {
      continue;
    } else if (feedsList[i].id === feed.id) {
      delete feedsList[i];
      return;
    }
  }
};

module.exports = CategoriesStore;
