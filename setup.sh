brew install ruby
bundle install
npm install
bundle exec rake db:create:all
bundle exec rake db:migrate
