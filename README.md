# NewsJunkie

[NewsJunkie](http://www.newsjunkie.in) is a clone of [Feedly](http://www.feedly.com), the RSS feed aggregator. It is built with [Ruby on Rails](http://rubyonrails.org/) and [React.js](https://facebook.github.io/react/). Visit the [live website here](http://www.newsjunkie.in)!

### Features

* Users can subscribe and unsubscribe to RSS feeds and organize them into categories
* Categories can be created, renamed, and destroyed
* RSS feeds are housed in a centralized database in order to speed up load time for users and to track feed popularity
* Articles are imported from RSS feeds with [Feedjira](http://feedjira.com/), sanitized with Rails' [WhiteListSanitizer](https://github.com/rails/rails-html-sanitizer), and cached in a centralized database
* Articles are crawled for images with [Nokogiri](http://www.nokogiri.org/) and thumbnails are cached, via [Paperclip](https://github.com/thoughtbot/paperclip) and [Figaro](https://github.com/laserlemon/figaro), on [AWS](https://aws.amazon.com/)
* Users can share articles on social media
* Users can search for articles using [pgSearch](https://github.com/Casecommons/pg_search)
* Users can mark articles as read and browse their reading history
* Users can create their own accounts or login with [Facebook](https://en.wikipedia.org/wiki/OAuth) via OAuth

## Technical Details

#### Feeds/Reads: Interpretation and Popularity Tracking

On the backend, subscriptions are entries in a joins-table between feeds and users. Popularity of feeds can be tracked by counting the number of entries in this joins-table that have the desired feed id. Reads are implemented in the same way mutatis mutandis.

#### Scalability

As the website scales, its performance will increase. When a user requests articles from some feed, the app checks when articles from that feed were last fetched. If articles were fetched less than fifteen minutes ago, the existing articles in the database are served. Otherwise, the feed is loaded and new articles are extracted, processed, and cached in the database. The upshot of this design is that, as they become more numerous, users will rarely have to wait for the server to fetch and process articles for *all* of their feeds. Most feeds -- especially the most popular -- will likely already be up to date. This results in a speedy user experience, since existing articles are simply retuned from the database.

## Screenshots

**Main View**
[![Main View](./docs/screenshots/ss1.png)](http://www.newsjunkie.in)

**Article View**
[![Article View](./docs/screenshots/ss2.png)](http://www.newsjunkie.in)
