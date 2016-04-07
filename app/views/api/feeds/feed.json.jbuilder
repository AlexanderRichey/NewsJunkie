json.meta do
  json.header @feed.name
  json.contentType "Feed"
  json.id @feed.id
  json.page @page
end

json.articles do
  json.array! @articles do |article|
    json.partial! 'article_core', article: article
  end
end
