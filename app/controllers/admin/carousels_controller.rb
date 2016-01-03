class Admin::CarouselsController < ApplicationController
  before_action :set_admin_carousel, only: [:show, :edit, :update, :destroy]
  before_action :set_language, only: [:new, :edit, :update, :create]
  layout "application_admin"
  before_filter :authorize

  # GET /admin/carousels
  # GET /admin/carousels.json
  def index
    @admin_carousels = Carousel.joins(:language).order(:order).all

  end

  # GET /admin/carousels/1
  # GET /admin/carousels/1.json
  def show
  end

  # GET /admin/carousels/new
  def new
    @admin_carousel = Carousel.new
    @admin_carousel.is_active = true
  end

  # GET /admin/carousels/1/edit
  def edit
  end

  # POST /admin/carousels
  def create

    @admin_carousel = Carousel.new(admin_carousel_params)
    if @admin_carousel.save
      redirect_to admin_carousels_url, success: 'Kayıt başarı ile oluşturuldu.'
    else
      render :new
    end

  end

  # PATCH/PUT /admin/carousels/1
  def update
    if  @admin_carousel.update(admin_carousel_params)
      redirect_to admin_carousels_url, success: 'Kayıt başarı ile güncellendi'
    else
      render :edit
    end

  end

  # DELETE /admin/carousels/1
  def destroy
    @admin_carousel.destroy
    redirect_to admin_carousels_url, notice: 'kaydı silindi.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_carousel
      @admin_carousel = Carousel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_carousel_params
      params.require(:carousel).permit(:title, :text, :href, :order, :is_active, :language_id, :photo)
    end

  def set_language
    @languages = Language.all
  end
end
