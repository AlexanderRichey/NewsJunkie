var CategoriesActions = require('../actions/categories_actions'),
    FeedsActions = require('../actions/feeds_actions');

var ApiUtil = {
  fetchCategories: function () {
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
  },
  editCategory: function (categoryInfo) {
    $.ajax({
      type: "GET",
      url: "api/categories/" + categoryInfo.id + "/edit",
      data: categoryInfo,
      success: function (category) {
        CategoriesActions.editCategory(category);
      },
      error: function () {
        console.log("AJAX Error: editCategory");
      }
    });
  },
  deleteCategory: function (categoryInfo) {
    $.ajax({
      type: "DELETE",
      url: "api/categories/" + categoryInfo.id,
      data: categoryInfo,
      success: function (category) {
        CategoriesActions.deleteCategory(category);
      },
      error: function () {
        console.log("AJAX Error: deleteCategory");
      }
    });
  },
  createFeed: function (feedInfo) {
    $.ajax({
      type: "POST",
      url: "/api/feeds",
      data: feedInfo,
      success: function (feed) {
        FeedsActions.receiveFeed(feed);
      },
      error: function () {
        console.log("AJAX Error: createFeed");
      }
    });
  },
  fetchFeeds: function () {
    $.ajax({
      type: "GET",
      url: "/api/feeds",
      success: function (feeds) {
        FeedsActions.receiveAll(feeds);
      },
      error: function () {
        console.log("AJAX Error: fetchFeeds");
      }
    });
  }
};

module.exports = ApiUtil;
