json.feed do
  json.name @subsciption.feed.name
  json.id @subsciption.feed.id
end

json.newCategoryId @subsciption.category_id
json.oldCategoryId @old_category_id
