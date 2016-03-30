class Api::CategoriesController < ApplicationController
  before_action :require_login

  def index
    @categories = current_user.categories
    render :index
  end

  def create
    @category = current_user.categories.new(category_params)

    if @category.save
      render :show
    else
      render json: "Error at Api::CategoriesController#create"
    end
  end

  def edit
    @category = Category.find(params[:category][:id])
    @category.update(category_params)

    if @category.save
      render :show
    else
      render json: "Error at Api::CategoriesController#edit"
    end
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end

  def require_login
    unless logged_in?
      render json: "You are not authorized to perform this action."
    end
  end
end
