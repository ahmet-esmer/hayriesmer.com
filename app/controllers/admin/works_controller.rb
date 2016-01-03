class Admin::WorksController < ApplicationController
  before_action :set_admin_work, only: [:show, :edit, :update, :destroy]
  layout "application_admin"
  before_filter :authorize

  before_action :set_parent, only: [:new, :edit, :update, :create]



  def set_parent
    @parent = Work.all.select(:title_tr, :id).where(:parent_id => nil).order(:order)

  end

  # GET /admin/works
  # GET /admin/works.json
  def index
    @admin_works = Work.all
  end

  # GET /admin/works/1
  # GET /admin/works/1.json
  def show
  end

  # GET /admin/works/new
  def new
    @admin_work = Work.new
    @admin_work.is_active = true

  end

  # GET /admin/works/1/edit
  def edit
  end

  # POST /admin/works
  # POST /admin/works.json
  def create

    @admin_work = Work.new(admin_work_params)
    if @admin_work.save
      redirect_to admin_works_url, success: 'Kayıt oluşturuldu.'
    else
      render :new
    end

  end

  # PATCH/PUT /admin/works/1
  # PATCH/PUT /admin/works/1.json
  def update
    if @admin_work.update(admin_work_params)
      redirect_to admin_works_url, success: 'Kayıt güncellendi'
    else
      render :edit
    end
  end

  # DELETE /admin/works/1
  # DELETE /admin/works/1.json
  def destroy
    @admin_work.destroy
    respond_to do |format|
      format.html { redirect_to admin_works_url, notice: 'Work was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_work
      @admin_work = Work.friendly.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_work_params
      params.require(:work).permit(:title_tr, :title_en, :order, :is_active, :parent_id, :title, :description, :keywords)
    end
end
