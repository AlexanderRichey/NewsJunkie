# Flux-capacitr

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
Flux-capacitr is a clone of Tumblr built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create blogs
- [x] Create blog posts with tags
- [x] View blogs and posts
- [x] Subscribe to blogs
- [x] View a feed of subscribed blogs
- [x] Search for blogs by title
- [x] Search for posts by tag

## Design Docs
* [DB schema][schema]
* [Wireframes of core views][views] (made with [cacoo][cacoo])

[cacoo]: https://cacoo.com/
[schema]: ./docs/schema.md
[views]: ./docs/views.md

## Implementation Timeline

### Phase 1: User Authentication, Basic Blogs and Posts (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create blogs and
posts using simple text forms in Rails views. The most important part of this
phase will be pushing the app to Heroku and ensuring that everything works
before moving on to phase 2.

### Phase 2: JSON API and First Backbone Views (~2 days)
I will add API routes to serve blog and post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, I will have the following rudimentary Backbone views:

* `BlogShow`
* `BlogForm`
* `PostShow`
* `PostForm`

### Phase 3: Editing and Displaying Posts (~2 days)
I plan to use third-party libraries to add functionality to the `PostForm` and
`PostShow` views in this phase. First I'll need to add a Markdown editor to the
`PostForm`, and make sure that the Markdown is properly escaped and formatted in
the `PostShow` view. I also plan to integrate Filepicker for file upload so
users can add images to blog posts.

### Phase 4: User Feeds (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`subscribed_blogs` association to serve a list of blog posts ordered
chronologically. On the Backbone side, I'll make a `FeedPosts` collection that
fetches from the new route, then create a `FeedShow` view that uses the new
collection. Ultimately, this will be the page users see after logging in.

### Phase 5: Searching for Blogs and Posts (~2 days)
I'll need a `search` route that accepts a query in the params. The controller
action will run two queries: one to find blogs where the `title` matches
the search term, and another to find posts where one of their associated `Tag`s
matches the search term. In Backbone, I plan to implement a `SearchResults` view
that will display matching blogs in one column and matching posts in another.

### Bonus Features (TBD)
- [ ] Activity history for posts (e.g. likes, reblogs, taggings)
- [x] Custom urls for blogs
- [x] 'Like' button and counter for `PostShow` view
- [x] Pagination of the `FeedShow`, `SearchShow`, and `BlogShow` views
- [ ] Post types with distinct views (image posts, quote posts, etc)
- [ ] Reblogging
- [ ] Support for multiple open sessions
- [x] User avatars

