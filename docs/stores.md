# Flux Stores

### FeedStore

Holds all persisted feed data.

##### Actions:
- `receiveAllFeedContent`
- `receiveSingleFeedContent`
- `removeFeed`

##### Listeners:
- `ArticleView`

### FeedFormStore

Holds un-persisted feed data to send to the API.

##### Actions:
- `receiveFeedFormParams`

##### Listeners:
- `NewFeedForm`

### CategoryStore

Holds all persisted category data.

##### Actions:
- `receiveSingleCategoryContent`
- `removeCategory`

### CategoryFormStore

Holds un-persisted category data to send to the API.

##### Actions:
- `receiveCategoryFormParams`

##### Listeners:
- `CategoryForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
