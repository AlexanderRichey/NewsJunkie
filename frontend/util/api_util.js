var CategoriesActions = require('../actions/categories_actions');

var ApiUtil = {
  fetchCategories: function (userid) {
    $.ajax({
      type: "GET",
      url: "/api/categories",
      success: function (categories) {
        CategoriesActions.receiveAll(categories);
      },
      error: function () {
        console.log("AJAX Error: fetchCategories");
      }
    });
  },
  createCategory: function (categoryName) {
    $.ajax({
      type: "POST",
      url: "api/categories",
      data: categoryName,
      success: function (category) {
        CategoriesActions.receiveCategory(category);
      },
      error: function () {
        console.log("AJAX Error: createCategory");
      }
    });
  }
};

module.exports = ApiUtil;
