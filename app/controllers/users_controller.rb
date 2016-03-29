class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to root_url
    else
      redirect_to new_user_url
    end
  end

  def update
  end

  def edit
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
