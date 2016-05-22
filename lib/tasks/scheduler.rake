desc "This task is called by the Heroku scheduler add-on"
task :clean_articles => :environment do
  puts "Cleaning articles..."
  Article.where("created_at > ?", 1.day.ago).destroy_all
  puts "done."
end
