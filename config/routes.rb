Rails.application.routes.draw do
  root to: "staticpages#index"

  resources :users, only: [:new, :create, :edit, :update]
  get "auth/facebook/callback", to: "omniauth#facebook"

  namespace :api, defaults: { format: :json } do
    resource  :session, only: [:show, :create, :destroy]
    resources :categories, only: [:index, :create, :destroy, :edit]
    resources :feeds, only: [:create, :show, :index,]
    resources :searches, only: [:index]

    get ':feeds/:action/:category_id',
      controller: "feeds"
    get ':feeds/today/:action',
      controller: "feeds"
    get ':subscriptions/:action/:category_id/:feed_id',
      controller: "subscriptions"
    post ':subscriptions/:action/:category_id/:feed_id',
      controller: "subscriptions"
  end
end
