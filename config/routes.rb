Rails.application.routes.draw do
  
  resources :restaurants
 
  post '/login', to: "sessions#create"
  get '/logout', to: "sessions#destroy"  
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/restaurants/:id/reviews', to: "reviews#create"
  get '/restaurants/:id/reviews', to: "reviews#index"
  patch '/restaurants/:restaurant_id/reviews/:id', to: "reviews#update"
  delete '/restaurants/:restaurant_id/reviews/:id', to: "reviews#destroy"
  delete '/restaurants/:id', to: "restaurants#destroy"
  get '/reviews', to: "reviews#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
