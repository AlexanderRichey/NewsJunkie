class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = user.session_token
    
    @current_user.fetch_articles
  end

  def logout!
    @current_user.reset_session_token if logged_in?
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_login
    unless logged_in?
      render json: "You must login.", status: 401
    end
  end
end
