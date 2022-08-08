Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  # Forward all requests to StaticController#index but only non-Ajax requests (!req.xhr?) and HTML Mime types (req.format.html?).
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#index'
end
