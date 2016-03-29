class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render json: "Credentials were wrong"
    else
      login!(user)
      redirect_to root_url
    end
  end

  def new
  end
end
