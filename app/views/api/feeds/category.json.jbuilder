json.meta do
  json.header @category.name
  json.contentType "Category"
  json.id @category.id
  json.page @page
end

json.articles do
  json.array! @articles do |article|
    json.partial! 'article_core', article: article
  end
end
