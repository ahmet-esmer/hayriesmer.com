class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

  helper_method :instagram_media

  def instagram_media
    @instagram = Instagram.user_recent_media("1080343853", {:count => 6})
  end



  def authorize
    I18n.default_locale = :tr
    redirect_to login_url, alert: "Not authorized" if current_user.nil?
  end

  def redirect_to(options = {}, response_status = {})
    if success = response_status.delete(:success)
      flash[:success] = success
    end

    if error = response_status.delete(:error)
      flash[:error] = error
    end

    super(options, response_status)
  end

end