# Flux Stores

### NoteStore

Holds all persisted note data.

##### Listeners:
- `NotesIndex` (passes to `NoteIndexItem` via props)
- `NoteDetail`

### NoteFormStore

Holds un-persisted note data to send to the API.

##### Listeners:
- `NoteForm`

### NotebookStore

Holds all persisted notebook data.

##### Listeners:
- `NotebookIndex`

### NotebookFormStore

Holds un-persisted notebook data to send to the API.

##### Listeners:
- `NotebookForm`

### SearchStore

Holds search parameters to send to the API.

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Listeners:
- `SearchSuggestions`
