class Api::FeedsController < ApplicationController
  before_action :require_login

  # TODAY method, route, n+1 queries!

  def create
    @feed = Feed.find_or_initialize_by(url: params[:feed][:url])
    subscription =
      @feed.subscriptions.new(category_id: params[:feed][:category])

    if @feed.save
      subscription.save
      render :show
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def index
    feeds = current_user.feeds.includes(:articles).limit(8)

    @articles = []
    # N+1
    feeds.each do |feed|
      feed.articles.limit(8).each do |article|
        @articles.push(article)
      end
    end

    @header = "All"
    render :user
  end

  def category
    @category = Category.includes(feeds: :articles).find(params[:category_id])

    @articles = []
    # N+1
    @category.feeds.each do |feed|
      feed.articles.limit(8).each do |article|
        @articles.push(article)
      end
    end

    @header = @category.name
    render :category
  end

  def today
    debugger
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.fetch_articles

    @header = @feed.name
    @articles = @feed.articles.limit(8)
    render :articles
  end
end
