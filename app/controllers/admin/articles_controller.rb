class Admin::ArticlesController < ApplicationController

  layout "application_admin"
  before_filter :authorize
  before_action :set_language, only: [:new, :edit, :update, :create]



  # GET /articles
  def index
    @articles = Article.joins(:language).all
    logger.fatal(@articles)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @articles }
    end
  end

  # GET /articles/1
  def show
    @article = Article.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @article }
    end
  end

  # GET /articles/new
  def new
    @article = Article.new
    #respond_to do |format|
     # format.html # new.html.erb
      #format.json { render json: @article }
   # end
  end

  # GET /articles/1/edit
  def edit
    @article = Article.find(params[:id])
  end

  # POST /articles
  def create
    @article = Article.new(params.require(:article).permit!)

    if @article.save
      redirect_to admin_articles_url, success: 'Makale kaydı oluştururdu.'
    else
      render action: :new
    end
  end

  # PUT /articles/1
  def update
    @article = Article.find(params[:id])
    if @article.update_attributes(params.require(:article).permit!)
      redirect_to admin_articles_url, success: 'Makale kaydı güncellendi'
    else
      render :edit
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to admin_articles_url, notice: "#{@article.name} : kaydı silindi."

  end

  private
    def set_language
      @languages = Language.all
    end
end