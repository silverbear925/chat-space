Rails.application.routes.draw do
  devise_for :users
  root to: 'messages_controller#index'
  resources :users, only:[:edit, :update]
end
