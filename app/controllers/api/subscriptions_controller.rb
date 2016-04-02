class Api::SubscriptionsController < ApplicationController
  before_action :require_login

  def edit
    @subsciption = Subscription.where(
                          category_id: params[:category_id],
                          feed_id: params[:feed_id]
                        )[0]

    @old_category_id = params[:category_id].to_i
    @subsciption.category_id = params[:newCategory]

    if @subsciption.save
      render :show
    else
      render json: @subsciption.errors.full_messages, status: 422
    end
  end

  def destroy
    @subsciption = Subscription.where(
                          category_id: params[:category_id],
                          feed_id: params[:feed_id]
                        )[0]

    if @subsciption.destroy!
      render :destroyed
    else
      render json: @subsciption.errors.full_messages, status: 422
    end
  end
end
