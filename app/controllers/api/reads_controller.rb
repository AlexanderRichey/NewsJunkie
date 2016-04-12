class Api::ReadsController < ApplicationController
  def read
    current_user.reads.find_or_create_by(article_id: params[:article_id])

    render json: {article_id: params[:article_id]}
  end

  def all
    current_user.articles.each do |article|
      current_user.reads.find_or_create_by(article_id: article.id)
    end

    render json: {}
  end
end
