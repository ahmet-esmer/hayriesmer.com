class Admin::ExhibitionWorksController < ApplicationController
  before_action :set_admin_exhibition_work, only: [:show, :edit, :update, :destroy]
  before_filter :authorize
  layout "application_admin"

  before_action only: [:new, :create, :index, :update, :edit, :destroy] {
    @exhibition = Exhibition.find(params[:exhibition_id])
  }

  def index
    @admin_exhibition_works = ExhibitionWork.where(exhibition_id: @exhibition.id).all
  end

  def show
  end

  def new
    @admin_exhibition_work = @exhibition.exhibition_works.new
    @action_name = 'create'
  end

  def edit
    @action_name = 'update'
  end

  def create
    @admin_exhibition_work = @exhibition.exhibition_works.new(admin_exhibition_work_params)

    if @admin_exhibition_work.save
      redirect_to  admin_exhibition_photos_path(@exhibition), notice: 'Kayıt başarıyla eklendi.'
    else
      render :new
    end

  end

  def update
    if  @admin_exhibition_work.update(admin_exhibition_work_params)
      redirect_to admin_exhibition_photos_path(@exhibition), notice: 'Kayıt başarıyla güncellendi.'
    else
      render :edit
    end

  end

  def destroy
    @admin_exhibition_work.destroy
    redirect_to admin_exhibition_photos_path(@exhibition), notice: 'Kayıt başarıyla silindi'
  end

  private
    def set_admin_exhibition_work
      @admin_exhibition_work = ExhibitionWork.find(params[:id])
    end

    def admin_exhibition_work_params
      params.require(:exhibition_work).permit(:title, :is_active, :photo, :order)
    end
end
