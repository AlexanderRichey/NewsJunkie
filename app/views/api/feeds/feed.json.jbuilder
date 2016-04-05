json.meta do
  json.header @feed.name
  json.contentType "Feed"
  json.id @feed.id
  json.page @page
end

json.articles do
  json.array! @articles do |article|
    json.title article.title
    json.url article.url
    json.body article.body
    json.pubDate article.pub_date
    json.article_id article.id
    json.feed_id @feed.id
    json.feed_name @feed.name
  end
end
