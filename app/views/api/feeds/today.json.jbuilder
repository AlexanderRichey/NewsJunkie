json.meta do
  json.header @header
  json.contentType "Today"
  json.id nil
  json.page @page
end

json.articles do
  json.array! @articles do |article|
    json.partial! 'article_core', article: article
  end
end
