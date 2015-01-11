class Admin::TypesController < ApplicationController

  before_action :set_admin_type, only: [:show, :edit, :update, :destroy]
  before_action :set_language, only: [:new, :edit, :update, :create]
  layout "application_admin"
  before_filter :authorize

  # GET /admin/types
  # GET /admin/types.json
  def index
    @admin_types = Type.joins(:language).all
  end

  # GET /admin/types/1
  # GET /admin/types/1.json
  def show
  end

  # GET /admin/types/new
  def new
    @admin_type = Type.new
  end

  # GET /admin/types/1/edit
  def edit
  end

  # POST /admin/types
  def create
    @admin_type = Type.new(admin_type_params)
    if @admin_type.save
      redirect_to admin_types_url, success: 'Link kaydı oluşturuldu.'
    else
       render :new
    end

  end

  # PATCH/PUT /admin/types/1
  def update
    if  @admin_type.update(admin_type_params)
      redirect_to admin_types_url, success: 'Kayıt güncellendi'
    else
      render :edit
    end
  end

  # DELETE /admin/types/1
  # DELETE /admin/types/1.json
  def destroy
    @admin_type.destroy
    redirect_to admin_types_url, notice: 'kaydı silindi.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_type
      @admin_type = Type.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_type_params
      params.require(:type).permit(:code, :text, :is_active, :language_id)
    end

  def set_language
    @languages = Language.all
  end
end
