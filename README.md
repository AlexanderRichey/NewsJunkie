# NewsJunkie

Link coming soon!

## Minimum Viable Product

NewsJunkie is a web application inspired by Feedly built using Ruby on Rails
and React.js. NewsJunkie allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Subscribe to, read, and delete RSS feeds
- [ ] Organize feeds within categories
- [ ] View feeds in list and magazine style
- [ ] View articles
- [ ] Share articles on social media

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Feeds and Articles Models, API, and basic APIUtil (2.5 days)

**Objective:** Users can subscribe and unsubscribe to RSS feeds through
the API.

- [ ] create `Feed` model
- [ ] create `Article` model (`Feeds` have many `Articles`)
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for feeds
- [ ] jBuilder views for feeds/articles
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days)

**Objective:** Users can subscribe and unsubscribe to RSS feeds with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each feed component, building out the flux loop as needed.
  - [ ] `Sidebar`
    - [ ] `AddContentForm`
    - [ ] `CategoriesContainer`
    - [ ] `Category`
  - [ ] `Main`
    - [ ] `Header`
    - [ ] `Controls`
    - [ ] `ArticleItem`
  - [ ] `ArticleView`
- [ ] save feeds to the DB on submit.
- [ ] automatically load new content on login and when page is idle

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles


### Phase 6: Categories (1 day)

**Objective:** Feeds can be organized within categories.

- [ ] create `Category` model and join table
- build out API, Flux loop, and components for:
  - [ ] adding/moving feeds to category
- [ ] Style new elements


### Phase 8: Styling Cleanup and Seeding (2 days)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus

- [ ] Add welcome page that suggests starter feeds for new users based on indicated interests
