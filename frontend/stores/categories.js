var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher');

var CategoriesConstants = require('../constants/categories_constants');

var _categories = [];

var CategoriesStore = new Store(AppDispatcher);

var resetCategories = function (categories) {
  _categories = categories;
};

var addCategory = function (category) {
  _categories.push(category);
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
  }
};

CategoriesStore.all = function () {
  return _categories;
};

CategoriesStore.find = function (id) {
  for (var i = 0; i < _categories.length; i++) {
    if (_categories[i].id === parseInt(id)) {
      return (_categories[i]);
    }
  }
};

module.exports = CategoriesStore;
