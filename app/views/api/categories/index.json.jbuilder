json.array! @categories do |category|
  json.id category.id
  json.name category.name
  json.feeds category.feeds do |feed|
    json.id feed.id
    json.name feed.name
  end
end
