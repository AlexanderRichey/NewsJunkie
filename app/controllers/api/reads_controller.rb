class Api::ReadsController < ApplicationController
  def read
    current_user.reads.create(article_id: params[:article_id])

    render json: {article_id: params[:article_id]}
  end
end
