class Admin::RecentWorksController < ApplicationController
  before_action :set_admin_recent_work, only: [:show, :edit, :update, :destroy]
  before_action :set_language, only: [:new, :edit, :update, :create]
  layout "application_admin"
  before_filter :authorize


  def index
    @admin_recent_works = RecentWork.joins(:language).all
  end


  def show
  end

  def new
    @admin_recent_work = RecentWork.new
    @admin_recent_work.is_active = true
  end

  def edit
  end

  def create
    @admin_recent_work = RecentWork.new(admin_recent_work_params)

    if @admin_recent_work.save
      redirect_to admin_recent_works_url, success: 'Kayıt başarı ile oluşturuldu.'
    else
      render :new
    end

  end

  def update

    if  @admin_recent_work.update(admin_recent_work_params)
      redirect_to admin_recent_works_url, success: 'Kayıt başarı ile güncellendi'
    else
      render :edit
    end

  end

  def destroy
    @admin_recent_work.destroy
    redirect_to admin_recent_works_url, notice: 'kaydı silindi.'

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_recent_work
      @admin_recent_work = RecentWork.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_recent_work_params
      params.require(:recent_work).permit(:title, :text, :href, :order, :is_active, :language_id, :photo)
    end

  def set_language
    @languages = Language.all
  end
end
