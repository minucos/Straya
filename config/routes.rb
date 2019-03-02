Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do

    resources :athletes, only: [:create]

    resources :routes, only: [:create, :show, :index, :update, :destroy]

    resources :locations, only: [:create, :show, :update, :destroy]

    resource :session, only: [:create, :destroy]

  end 

end
