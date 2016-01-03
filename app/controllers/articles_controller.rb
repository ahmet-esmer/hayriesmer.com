class ArticlesController < ApplicationController

  layout "application_site"
  def index
    @articles = get_article_list('ARTICLES')
  end

  def criticism
    @articles = get_article_list('CRITICISM')

    render :index
  end

  def detail
    @article = Article.find(params[:id])

    @title = @article.title
    @description = @article.description
    @keywords = @article.keywords

    @article.view_count += 1
    @article.save

  end

  def bibliography
    @articles = get_article_list('BIBLIOGRAPHY')
  end

private
  def get_article_list(type_name)
    Article.joins(:language).where("languages.code" =>  I18n.locale)
        .where("articles.type_name" =>  type_name)
        .where("articles.is_published" =>  true )
        .order("articles.order").all
  end
end