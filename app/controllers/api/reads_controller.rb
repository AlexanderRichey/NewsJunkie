class Api::ReadsController < ApplicationController
  def read
    current_user.reads.find_or_create_by(article_id: params[:article_id])

    render json: {article_id: params[:article_id]}
  end

  def all
    debugger
    case params[:contentType]
    when "Read"
      
    when "All"
      current_user.mark_all_as_read
    when "Category"
      current_user.mark_category_as_read(params[:id])
    when "Feed"
      current_user.mark_feed_as_read(params[:id])
    end

    render json: {}
  end
end
