json.feed do
  json.name @feed.name
  json.id @feed.id
end

json.categoryId @feed.categories.last.id
