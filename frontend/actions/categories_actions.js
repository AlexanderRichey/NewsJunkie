var Dispatcher = require('../dispatcher/dispatcher'),
    CategoriesConstants = require('../constants/categories_constants');

var CategoriesActions = {
  receiveAll: function (categories) {
    Dispatcher.dispatch({
      actionType: CategoriesConstants.RECEIVE_CATEGORIES,
      categories: categories
    });
  },
  addCategory: function () {
    Dispatcher.dispatch({
      actionType: CategoriesConstants.ADD_CATEGORY,
    });
  },
  receiveCategory: function (category) {
    Dispatcher.dispatch({
      actionType: CategoriesConstants.RECEIVE_CATEGORY,
      category: category
    });
  }
};

module.exports = CategoriesActions;
