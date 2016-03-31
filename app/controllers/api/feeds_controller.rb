class Api::FeedsController < ApplicationController
  before_action :require_login

  def index
    @feeds = current_user.feeds
    render :index
  end

  def create
    @feed = Feed.find_or_initialize_by(url: params[:url])
    subscription =
      @feed.categorized_feeds.new(category_id: params[:category_id])

    if @feed.save
      subscription.save
      render :show
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def show
    @feeds = Feed.find(params[:id])
    render :show
  end
end
