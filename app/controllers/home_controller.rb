class HomeController < ApplicationController

  layout "application_site"


  def index

    @carousels = Carousel.joins(:language).where("languages.code" =>  I18n.locale).order("carousels.order").all

    #@articles= Article.order("RAND()").first(3)

   @articles = Article.joins(:language).where("languages.code" =>  I18n.locale)
                                        .where("articles.type_name" =>  ['ARTICLES','CRITICISM'])
                                        .where("articles.is_published" =>  true )
                                        .order("RAND()").first(3)



    @exhibitions = Exhibition.where(:is_individual => true).order('start_at DESC').all


    @recent_works = RecentWork.joins(:language).where("languages.code" =>  I18n.locale).order("recent_works.order").all


    @exhibitions_one = @exhibitions.limit(4).offset(0)
    @exhibitions_two = @exhibitions.limit(4).offset(4)
    @exhibitions_three = @exhibitions.limit(4).offset(8)

  end


  def about

    @about = get_type_by("ABOUT")
  end



  def awards
    @awards = get_type_by("AWARDS")
  end

  end
