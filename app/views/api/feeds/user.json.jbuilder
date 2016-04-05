json.header @header

json.articles do
  json.array! @articles do |article|
    json.title article.title
    json.url article.url
    json.body article.body
    json.pubDate article.pub_date
    json.article_id article.id
    json.feed_id article.feed.id
    json.feed_name article.feed.name
  end
end