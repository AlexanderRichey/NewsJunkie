Rails.application.routes.draw do
  root to: "sessions#new"

  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]

  resources :staticpages, only: [:index]

  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :create]
  end
end
