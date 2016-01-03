class ExhibitionsController < ApplicationController

  layout "application_site"
  def index

    @end   = params[:end_date] != nil ? params[:end_date].to_i : 2015
    @start = params[:start_date] != nil ? params[:start_date].to_i : 2009


    @mixed_exhibitions = Exhibition.start_between(@end, @start).where(:is_individual => false).order('start_at DESC')
    @personal_exhibitions = Exhibition.start_between(@end, @start).where(:is_individual => true).order('start_at DESC')

  end


  def photos

    @exhibition = Exhibition.find(params[:id])
    @exhibition_name = I18n.locale == :tr  ? @exhibition.title_tr : @exhibition.title_en
    @exhibition_works = ExhibitionWork.where(exhibition_id: params[:id]).order(:order).all

  end


  def windows

    @exhibition = Exhibition.find(params[:id])
    @exhibition_name = I18n.locale == :tr  ? @exhibition.title_tr : @exhibition.title_en
    @exhibition_works = ExhibitionWork.where(exhibition_id: params[:id]).order(:order).all

  end

end