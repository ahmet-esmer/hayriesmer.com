class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :set_locale


  private
  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
    Rails.application.routes.default_url_options[:locale]= I18n.locale
  end

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user


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