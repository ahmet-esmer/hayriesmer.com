class SessionsController < ApplicationController
  def new
  end

  layout false
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      session[:user_name] = user.user_name
      redirect_to admin_url, notice: "Logged in!"
    else
      flash.now.alert = "Email or password is invalid"
      render "new"
    end
  end


  def destroy
    session[:user_id] = nil
    session[:user_name] = nil
    redirect_to root_url, notice: "Logged out!"
  end
end