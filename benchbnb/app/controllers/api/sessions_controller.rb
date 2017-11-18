class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
      redirect_to root_url
    else
      flash.now[:errors] = user.errors
      render json: "Invalid credentials"
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: "No user to log out.", status: 404
    end
  end
end
