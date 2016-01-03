class Admin::WorkDetailsController < ApplicationController
  before_action :set_admin_work_detail, only: [:show, :edit, :update, :destroy]

  before_filter :authorize
  layout "application_admin"


  before_action only: [:new, :create, :index, :update, :edit, :destroy] {
    @work = Work.friendly.find(params[:work_id])
  }


  # GET /admin/work_details
  # GET /admin/work_details.json
  def index
    @admin_work_details = WorkDetail.where(work_id: @work.id).order(:order).all

  end

  # GET /admin/work_details/1
  # GET /admin/work_details/1.json
  def show
  end

  # GET /admin/work_details/new
  def new
    @admin_work_detail = @work.work_details.new
    @admin_work_detail.is_active = true
    @action_name = 'create'
  end

  # GET /admin/work_details/1/edit
  def edit
    @action_name = 'update'
  end

  # POST /admin/work_details
  # POST /admin/work_details.json
  def create

    @admin_work_detail = @work.work_details.new(admin_work_detail_params)

    if @admin_work_detail.save
      redirect_to  admin_work_photos_path(@work), notice: 'Kayıt başarıyla eklendi.'
    else
      render :new
    end
  end

  # PATCH/PUT /admin/work_details/1
  # PATCH/PUT /admin/work_details/1.json
  def update
    if  @admin_work_detail.update(admin_work_detail_params)
      redirect_to admin_work_photos_path(@work), notice: 'Kayıt başarıyla güncellendi.'
    else
      render :edit
    end
  end

  # DELETE /admin/work_details/1
  # DELETE /admin/work_details/1.json
  def destroy
    @admin_work_detail.destroy
    redirect_to admin_work_photos_path(@work), notice: 'Kayıt başarıyla silindi'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_work_detail
      @admin_work_detail = WorkDetail.find(params[:id])

    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_work_detail_params
      params.require(:work_detail).permit(:title, :is_active, :photo, :order)

    end
end
