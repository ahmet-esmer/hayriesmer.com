class Admin::UsersController < ApplicationController

  before_filter :authorize

  layout "application_admin"

  def index
    @users = User.all

    #flash[:success] = "Lönerapporten sparades korrekt!"
    #Loglama seviyeleri.
    logger.info("test Ahmet")
    logger.debug("debug")
    logger.warn("warn")
    logger.error("error")
    logger.fatal("fatal")


    #flash[:success] = 'Kullanıcı kaydı başarı ile oluştururldu.'
    #flash[:notice] = 'Kullanıcı kaydı başarı ile oluştururldu.'
    #flash[:error] = 'Kullanıcı kaydı başarı ile oluştururldu.'
    #flash[:alert] = 'Kullanıcı kaydı başarı ile oluştururldu.'
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params.require(:user).permit!)

    if @user.save
      redirect_to admin_users_url, success: 'Kullanıcı kaydı başarı ile oluştururldu.'
    else
     render :new
    end
  end

  def destroy
     @user = User.find(params[:id])
     @user.destroy
     redirect_to admin_users_url, notice: "#{@user.user_name} kullanıcı silindi."
  end

end