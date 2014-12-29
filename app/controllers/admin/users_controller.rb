class Admin::UsersController < ApplicationController

  before_filter :authorize

  layout "admin"

  def index
    @users = User.all

    #Loglama seviyeleri.
    logger.info("test Ahmet")
    logger.debug("debug")
    logger.warn("warn")
    logger.error("error")
    logger.fatal("fatal")
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params.require(:user).permit!)

    respond_to do |format|
      if @user.save
        format.html { redirect_to admin_users_url, notice: 'User was successfully created.' }
        format.json { render json: @user, status: :created, location: [:admin,@user] }
      else
        format.html { render action: "new" }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

end