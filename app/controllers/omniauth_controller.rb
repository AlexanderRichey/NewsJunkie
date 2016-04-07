class OmniauthController < ApplicationController
  def facebook
    @user = User.find_or_create_by_auth_hash(auth_hash)
    login!(@user)
    redirect_to "/i/new"
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end
end
