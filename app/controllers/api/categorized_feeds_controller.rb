class Api::CategorizedFeedsController < ApplicationController
  before_action :require_login

  def edit
    @categorized_feed = CategorizedFeed.where(
                          category_id: params[:category_id],
                          feed_id: params[:feed_id]
                        )[0]

    @categorized_feed.category_id = params[:newCategory]
    @old_category_id = params[:category_id].to_i

    if @categorized_feed.save
      render :show
    else
      render json: @categorized_feed.errors.full_messages, status: 422
    end
  end

  def destroy
    @categorized_feed = CategorizedFeed.where(
                          category_id: params[:category_id],
                          feed_id: params[:feed_id]
                        )[0]

    if @categorized_feed.destroy!
      render :destroyed
    else
      render json: @categorized_feed.errors.full_messages, status: 422
    end
  end
end
