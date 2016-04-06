class Api::FeedsController < ApplicationController
  before_action :require_login

  def create
    @feed = Feed.find_or_initialize_by(url: params[:feed][:url])
    subscription =
      @feed.subscriptions.new(category_id: params[:feed][:category])

    if @feed.save
      subscription.save
      @category_id = subscription.category.id
      render :create
    else
      render json: @feed.errors.full_messages, status: 422
    end
  end

  def index
    @articles = current_user
      .articles
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    @header = "All"
    render :all
  end

  def category
    @category = Category.find(params[:category_id])
    @articles = @category
      .articles
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    render :category
  end

  def today
    @articles = current_user
      .articles
      .where(pub_date: Date.today)
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    @header = "Today"
    render :today
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.fetch_articles
    @articles = @feed.articles
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    render :feed
  end
end
