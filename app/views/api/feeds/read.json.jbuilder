json.meta do
  json.header @header
  json.contentType "Read"
  json.id nil
  json.page @page
end

json.articles do
  json.array! @articles do |article|
    json.partial! 'article_core', article: article
    json.read true
  end
end
