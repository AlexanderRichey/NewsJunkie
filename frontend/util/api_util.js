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
      error: function (e) {
        console.log("AJAX Error: fetchCategories");
        console.log(e);
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
      error: function (e) {
        console.log("AJAX Error: createCategory");
        console.log(e);
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
  createFeed: function (feedData) {
    $.ajax({
      type: "POST",
      url: "/api/feeds",
      data: feedData,
      success: function (feedData) {
        FeedsActions.receiveFeed(feedData);
      },
      error: function () {
        console.log("AJAX Error: createFeed");
      }
    });
  },
  updateSubscription: function (subscriptionData) {
    $.ajax({
      type: "GET",
      url:  "/api/subscriptions/edit/" +
            subscriptionData.categoryId +
            "/" + subscriptionData.feedId,
      data: { newCategory: subscriptionData.selectedCategory },
      success: function (subscriptionData) {
        FeedsActions.editFeed(subscriptionData);
      },
      error: function () {
        console.log("AJAX Error: updateSubscription");
      }
    });
  },
  destroySubscription: function (subscriptionData) {
    $.ajax({
      type: "GET",
      url:  "/api/subscriptions/destroy/" +
            subscriptionData.categoryId +
            "/" + subscriptionData.feedId,
      success: function (subscriptionData) {
        FeedsActions.unsubscribe(subscriptionData);
      },
      error: function () {
        console.log("AJAX Error: destroySubscription");
      }
    });
  }
};

module.exports = ApiUtil;

// fetchFeeds: function () {
//   $.ajax({
//     type: "GET",
//     url: "/api/feeds",
//     success: function (feeds) {
//       FeedsActions.receiveAll(feeds);
//     },
//     error: function () {
//       console.log("AJAX Error: fetchFeeds");
//     }
//   });
// }
