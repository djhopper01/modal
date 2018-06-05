Rails.application.routes.draw do
  root to: 'consents#new'
  resource :consent
end
