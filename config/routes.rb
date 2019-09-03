Rails.application.routes.draw do
  devise_for :users
  root to: 'messages_controller#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages_controller, only: [:index, :create]
end
end
