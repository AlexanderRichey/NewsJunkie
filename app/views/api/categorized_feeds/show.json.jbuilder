json.feed do
  json.name @categorized_feed.feed.name
  json.id @categorized_feed.feed.id
end

json.categoryId @categorized_feed.category_id
