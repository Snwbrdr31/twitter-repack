Rails.application.routes.draw do
  root 'home#index'

  # RESOURCE ROUTES

  # GET ROUTES
  
  # POST ROUTES

  # PUT ROUTES

  # DELETE ROUTES

  # API ROUTES
  namespace :api do
    get 'tweets', to: 'tweets#index'
    post 'tweets', to: 'tweets#create'
  end

  # NO ROUTES BELOW THIS
  get '*unmatched_route', to: 'home#index'
end
