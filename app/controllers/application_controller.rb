class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :set_locale


  private
  def set_locale

    I18n.locale = params[:ln] || I18n.default_locale
    Rails.application.routes.default_url_options[:ln]= I18n.locale
  end


  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user


  helper_method :get_links

  def get_links
    #@links = Link.joins(:language).where("languages.code" =>  I18n.locale).where("links.is_active" =>  true).order("links.order").all
    @links = Link.where(:is_active =>  true).order(:order).all
  end

  helper_method :get_types

  def get_types

    @types = Rails.cache.read('types')
    if @types.nil?
      @types = Type.joins(:language).where("types.is_active" =>  true).all
      Rails.cache.write('types', @types, expires_in: 60.minute)
    end

  end

  helper_method :get_type_by

  def get_type_by(code)
    get_types
    @types.where("languages.code" =>  I18n.locale).where("types.code" =>  code).first.text
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