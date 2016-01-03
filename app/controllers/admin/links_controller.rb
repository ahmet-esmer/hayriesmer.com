class Admin::LinksController < ApplicationController

  layout "application_admin"
  before_action :set_admin_link, only: [:show, :edit, :update, :destroy]
  before_action :set_language, only: [:new, :edit, :update, :create]
  before_filter :authorize


  # GET /admin/links
  def index
    @admin_links = Link.joins(:language).all
  end

  # GET /admin/links/1
  def show
  end

  # GET /admin/links/new
  def new
    @admin_link = Link.new
    @admin_link.is_active = true
  end

  # GET /admin/links/1/edit
  def edit
  end

  # POST /admin/links
  def create
    @admin_link = Link.new(admin_link_params)

      if @admin_link.save
        redirect_to admin_links_url, success: 'Link kaydı oluşturuldu.'
      else
        render :new
      end
  end

  # PATCH/PUT /admin/links/1
  # PATCH/PUT /admin/links/1.json
  def update

    if  @admin_link.update(admin_link_params)
      redirect_to admin_articles_url, success: 'Link kaydı güncellendi'
    else
      render :edit
    end

  end

  # DELETE /admin/links/1
  # DELETE /admin/links/1.json
  def destroy
    @admin_link.destroy
    respond_to do |format|
      format.html { redirect_to admin_links_url, notice: 'Link kaydı silindi.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_link
      @admin_link = Link.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_link_params
      params.require(:link).permit(:text, :href, :order, :is_active, :language_id)
    end

    def set_language
      @languages = Language.all
    end
end
