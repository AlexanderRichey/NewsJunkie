class Api::SearchesController < ApplicationController
  def index
    search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])

    @page = params[:page]
    @articles = []

    search_results.each do |result|
      @articles.push(Article.find(result.searchable_id))
    end

    render :index
  end
end
