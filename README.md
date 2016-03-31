# NewsJunkie

http://newsjunkiealex.herokuapp.com/

## Minimum Viable Product

NewsJunkie is a web application inspired by Feedly built using Ruby on Rails
and React.js. NewsJunkie allows users to:

- [X] Create an account
- [X] Log in / Log out
- [ ] Subscribe to, read, and delete RSS feeds
- [X] Organize feeds within categories
- [ ] View feeds in list and magazine style
- [ ] View articles
- [ ] Share articles on social media

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/wireframes
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1 day)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin
- [X] build signin/up views

### Phase 2: Categories Model (1.5 days)

**Objective:** Users can create and delete categories through
the API and UI.

- [X] create `Categories` model
- [X] CRUD API for categories
- [X] jBuilder views for categories
- [X] setup Webpack & Flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in the console.
- [X] build categories views
  - [X] `Sidebar`
    - [X] `CategoriesContainer`
    - [X] `Category`
- [ ] style categories views


### Phase 3: Feeds Model (1.5 days)

**Objective:** Users can subscribe and unsubscribe to RSS feeds through
the API and UI.

- [ ] create `Feeds` model (`Categories` have many `Feeds`)
- [ ] save feeds to the DB on submit.
- [ ] CRUD API for feeds
- [ ] jBuilder views for feeds
- [ ] test API interaction in the console
- [ ] build feeds views
  - [X] `Sidebar`
    - [X] `Category`
      - [ ] `Feed`
  - [ ] `Main`
    - [ ] `Header`

### Phase 4: Articles Model (1.5 days)

**Objective:** Users can mark view and mark articles as read from the API and UI.

- [ ] create `Articles` model (`Feeds` have many `Articles`)
- [ ] CRUD API for articles
- [ ] articles older than three days are deleted
- [ ] jBuilder views for articles
- [ ] test API interaction in the console
- [ ] build article views
  - [X] `Main`
    - [ ] `ArticleItem`
    - [ ] `ArticleView`


### Phase 5: Router (1 day)

**Objective:** URLs changes based on article being read.

- [ ] setup React Router

### Phase 6: Develop Controls (1 day)

**Objective:** users can refresh, mark all as read, and share articles.

- [ ] CRUD API for refresh and mark all as read
- [ ] CRUD API for sharing on social media
- [ ] build components

### Phase 7: Styling 2 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus

- [ ] Add welcome page that suggests starter feeds for new users based on indicated interests
