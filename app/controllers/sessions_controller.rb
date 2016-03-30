class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      redirect_to staticpages_url
    else
      flash[:errors] = ["Incorrect login info"]
      redirect_to new_session_url
    end
  end

  def destroy
    logout!
		redirect_to new_session_url
  end

  def new
    render :new
  end
end
