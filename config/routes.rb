Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]

  resources :staticpages, only: [:index]

  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :create, :destroy, :edit]
    resources :feeds, only: [:create, :show, :index]

    get   ':subscriptions/:action/:category_id/:feed_id',
      controller: "subscriptions"
    post  ':subscriptions/:action/:category_id/:feed_id',
      controller: "subscriptions"
  end
end
