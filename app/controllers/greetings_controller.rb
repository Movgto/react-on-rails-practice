class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    respond_to do |format|
      format.json { render json: @greetings }
      format.html
    end
  end
end
