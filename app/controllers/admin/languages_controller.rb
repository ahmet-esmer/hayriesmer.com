class Admin::LanguagesController < ApplicationController

  layout "application_admin"
  before_action :set_admin_language, only: [:show, :edit, :update, :destroy]
  before_filter :authorize



  # GET /admin/languages
  # GET /admin/languages.json
  def index
    @admin_languages = Language.all
  end

  # GET /admin/languages/1
  # GET /admin/languages/1.json
  def show
  end

  # GET /admin/languages/new
  def new
    @admin_language = Language.new
  end

  # GET /admin/languages/1/edit
  def edit
  end

  # POST /admin/languages
  # POST /admin/languages.json
  def create
    @admin_language = Language.new(admin_language_params)

    respond_to do |format|
      if @admin_language.save
        format.html { redirect_to admin_languages_path, success: 'Language was successfully created.' }
        format.json { render :show, status: :created, location: @admin_language }
      else
        format.html { render :new }
        format.json { render json: @admin_language.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/languages/1
  # PATCH/PUT /admin/languages/1.json
  def update
    respond_to do |format|
      if @admin_language.update(admin_language_params)
        format.html { redirect_to admin_languages_path, notice: 'Language was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_language }
      else
        format.html { render :edit }
        format.json { render json: @admin_language.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/languages/1
  # DELETE /admin/languages/1.json
  def destroy
    @admin_language.destroy
    respond_to do |format|
      format.html { redirect_to admin_languages_url, notice: 'Language was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_admin_language
      @admin_language = Language.find(params[:id])
    end

    def admin_language_params
      params.require(:language).permit(:name, :code, :icon, :is_active)
    end


end
