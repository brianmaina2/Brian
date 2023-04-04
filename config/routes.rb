Rails.application.routes.draw do
  resources :controllers
  resources :transactions
  resources :accounts
  resources :users

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
end
