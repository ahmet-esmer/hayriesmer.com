class Admin::ExhibitionsController < ApplicationController
  before_action :set_admin_exhibition, only: [:show, :edit, :update, :destroy]
  layout "application_admin"
  before_filter :authorize

  # GET /admin/exhibitions
  # GET /admin/exhibitions.json
  def index
    @admin_exhibitions = Exhibition.all.order('start_at DESC')
  end

  # GET /admin/exhibitions/1
  # GET /admin/exhibitions/1.json
  def show
  end

  # GET /admin/exhibitions/new
  def new
    @admin_exhibition = Exhibition.new
    @admin_exhibition.is_active = true
  end

  # GET /admin/exhibitions/1/edit
  def edit
  end

  # POST /admin/exhibitions
  def create
    @admin_exhibition = Exhibition.new(admin_exhibition_params)
    if @admin_exhibition.save
      redirect_to admin_exhibitions_url, success: 'Kayıt oluşturuldu.'
    else
      render :new
    end
  end

  # PATCH/PUT /admin/exhibitions/1
  def update
    if @admin_exhibition.update(admin_exhibition_params)
      redirect_to admin_exhibitions_url, success: 'Kayıt güncellendi'
    else
      render :edit
    end
  end

  # DELETE /admin/exhibitions/1
  # DELETE /admin/exhibitions/1.json
  def destroy
    @admin_exhibition.destroy
    redirect_to admin_exhibitions_url, notice: 'kaydı silindi.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_exhibition
      @admin_exhibition = Exhibition.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_exhibition_params
      params.require(:exhibition).permit(:title_tr, :title_en, :text_tr, :text_en, :start_at, :end_at, :is_individual, :is_active)
    end
end
