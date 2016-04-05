require 'feedjira'

url = 'http://www.theverge.com/rss/index.xml'

feed = Feedjira::Feed.fetch_and_parse url

puts feed.title
puts feed.url
puts feed.entries.first.title
puts feed.entries.first.url
puts feed.entries.first.content
puts feed.entries.first.summary
puts feed.entries.first.published

url = 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'

feed = Feedjira::Feed.fetch_and_parse url

puts feed.title
puts feed.url
puts feed.entries.first.title
puts feed.entries.first.url
puts feed.entries.first.content
puts feed.entries.first.summary
puts feed.entries.first.published
