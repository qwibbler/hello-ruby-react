class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      { :id => 1, :name => 'Thing 1' }
    ]}.to_json
  end
end
