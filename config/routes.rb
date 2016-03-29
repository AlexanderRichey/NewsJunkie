Rails.application.routes.draw do
  root to: "staticpages#root"

  resources :users, only: [:new, :create, :edit, :update]
  resource :session, only: [:new, :create, :destroy]
end
