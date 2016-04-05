class Api::FeedsController < ApplicationController
  before_action :require_login

  # def index
  #   @feeds = current_user.feeds
  #   render :index
  # end

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

  def show
    @feed = Feed.find(params[:id])
    @feed.fetch_articles

    @header = @feed.name
    @articles = @feed.articles.limit(7)
    render :articles
  end
end
