Rails.application.routes.draw do
  # public profiles visible to other users
  devise_for :users

  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :midis do
    resources :comments, only: %i[create destroy]
    resources :upvotes, only: %i[create destroy]
  end
  resources :profiles, only: %i[edit update show]

  get "midi/:id/download_count", to: "midis#increase_download_counter", as: :increase_download
  get "profile/:id/edit_photo", to: "profiles#change_photo", as: :edit_profile_photo
  patch "profile/:id/update_photo", to: "profiles#update_photo", as: :update_profile_photo
  # get "midis", to: "midis#index", as: :midis
  # get "midi/:id", to: "midis#show", as: :midi
end
