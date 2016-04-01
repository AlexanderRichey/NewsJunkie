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

module.exports = CategoriesStore;
