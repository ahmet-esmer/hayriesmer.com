HayriEsmer::Application.routes.draw do


  mount Ckeditor::Engine => '/ckeditor'
  resources :articles, only: [:index]

  get 'signup', to: 'users#new',        as: :signup
  get 'login',  to: 'sessions#new',     as: :login
  get 'logout', to: 'sessions#destroy', as: :logout

  get 'twitter',   to: 'social_media#twitter', as: :twitter_path
  get 'instagram', to: 'social_media#instagram',   as: :instagram_path

  resources :users
  resources :sessions

  namespace :admin do
    get '', to: 'dashboard#index', as: '/'
    resources :articles
    resources :users
    resources :languages
    resources :links
    resources :types
    resources :carousels
    resources :exhibitions
    #resources :exhibition_works

    resources :exhibitions do
      resources :photos, :controller => "exhibition_works"
    end
  end

  root :to => "home#index"
  #root to: 'articles#index'

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end