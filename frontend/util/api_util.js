var CategoriesActions = require('../actions/categories_actions'),
    FeedsActions = require('../actions/feeds_actions'),
    SessionActions = require('../actions/session_actions'),
    ArticlesActions = require('../actions/articles_actions'),
    HeaderActions = require('../actions/header_actions');

var ApiUtil = {
  login: function (credentials, callback) {
    $.ajax({
      type: "POST",
      url: "/api/session",
      dataType: "json",
      data: credentials,
      success: function (currentUser) {
        SessionActions.currentUserReceived(currentUser);
        callback && callback();
      },
      error: function (e) {
        console.log("AJAX Error: login");
        console.log(e);
        SessionActions.renderErrorMessage(e.statusText);
      }
    });
  },
  logout: function () {
    $.ajax({
      type: "DELETE",
      url: "/api/session",
      dataType: "json",
      success: function() {
        SessionActions.logout();
      }
    });
  },
  fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "json",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  },
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
      error: function (e) {
        console.log("AJAX Error: createFeed");
        console.log(e);
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
  },
  fetchArticlesByFeed: function (feedId, pageNumber) {
    $.ajax({
      type: "GET",
      url: "/api/feeds/" + feedId,
      dataType: "json",
      data: this.makePageData(pageNumber),
      success: function (articlesData) {
        ArticlesActions.receiveArticles(articlesData);
      },
      error: function (e) {
        console.log("AJAX Error: fetchArticlesByFeed");
        console.log(e);
      }
    });
  },
  fetchArticlesByCategory: function (categoryId, pageNumber) {
    $.ajax({
      type: "GET",
      url: "/api/feeds/category/" + categoryId,
      dataType: "json",
      data: this.makePageData(pageNumber),
      success: function (articlesData) {
        ArticlesActions.receiveArticles(articlesData);
      },
      error: function (e) {
        console.log("AJAX Error: fetchArticlesByCategory");
        console.log(e);
      }
    });
  },
  fetchArticlesByUser: function (pageNumber) {
    $.ajax({
      type: "GET",
      url: "/api/feeds/",
      dataType: "json",
      data: this.makePageData(pageNumber),
      success: function (articlesData) {
        ArticlesActions.receiveArticles(articlesData);
      },
      error: function (e) {
        console.log("AJAX Error: fetchArticlesByUser");
        console.log(e);
      }
    });
  },
  fetchTodaysArticles: function (pageNumber) {
    $.ajax({
      type: "GET",
      url: "/api/feeds/today/today",
      dataType: "json",
      data: this.makePageData(pageNumber),
      success: function (articlesData) {
        ArticlesActions.receiveArticles(articlesData);
      },
      error: function (e) {
        console.log("AJAX Error: fetchTodaysArticles");
        console.log(e);
      }
    });
  },
  search: function (query, pageNumber) {
    $.ajax({
      type: "GET",
      url: "/api/searches",
      dataType: "json",
      data: {query: query, pageNumber: pageNumber},
      success: function (articlesData) {
        ArticlesActions.receiveArticles(articlesData);
      },
      error: function () {
        console.log("ApiUtil#search error!");
      }
    });
  },
  markAsRead: function (articleId) {
    $.ajax({
      type: "GET",
      url: "/api/reads/read",
      dataType: "json",
      data: {article_id: articleId},
      success: function (result) {
        ArticlesActions.markAsRead(result);
      },
      error: function (e) {
        console.log("ApiUtil#markAsRead error!");
        console.log(e);
      }
    });
  },
  makePageData: function (pageNumber) {
    if (pageNumber === undefined) {
      pageNumber = 1;
    }

    pageNumber = (pageNumber).toString();
    var pageData = { page: pageNumber };

    return pageData;
  }
};

module.exports = ApiUtil;
