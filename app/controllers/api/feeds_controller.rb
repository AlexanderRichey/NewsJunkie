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
      .joins("LEFT OUTER JOIN reads ON reads.article_id = articles.id")
      .where("reads.user_id IS NULL OR reads.user_id != ?", current_user.id)
      .where.not(id: Read.select("article_id").where(user_id: current_user.id))
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
      .joins("LEFT OUTER JOIN reads ON reads.article_id = articles.id")
      .where("reads.user_id IS NULL OR reads.user_id != ?", current_user.id)
      .where.not(id: Read.select("article_id").where(user_id: current_user.id))
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    render :category
  end

  def today
    @articles = current_user
      .articles
      .joins("LEFT OUTER JOIN reads ON reads.article_id = articles.id")
      .where("reads.user_id IS NULL OR reads.user_id != ?", current_user.id)
      .where.not(id: Read.select("article_id").where(user_id: current_user.id))
      .where(pub_date: Date.today)
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    @header = "Today"
    render :today
  end

  def show
    @feed = Feed.find(params[:id])
    @articles = Article
      .joins("LEFT OUTER JOIN reads ON reads.article_id = articles.id")
      .where(feed_id: params[:id])
      .where("reads.user_id IS NULL OR reads.user_id != ?", current_user.id)
      .where.not(id: Read.select("article_id").where(user_id: current_user.id))
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    render :feed
  end

  def read
    @articles = Article
      .distinct
      .joins(:reads)
      .where("reads.user_id = ?", current_user.id)
      .order(pub_date: :desc)
      .page(params[:page])
    @page = params[:page].to_i
    @header = "Read"
    render :read
  end

  def refresh
    current_user.fetch_articles
    render json: {}
  end
end
