class WorksController < ApplicationController

  layout "application_site"
  def index

    @work = Work.friendly.find(params[:id])
    @parent = Work.select(:title_tr, :title_en).where(id: @work.parent_id).first


    @workName = I18n.locale == :tr  ? @work.title_tr : @work.title_en
    @parentName = I18n.locale == :tr  ? @parent.title_tr : @parent.title_en


    @title = @workName
    @description = @work.description
    @keywords = @work.keywords

    @work_details = WorkDetail.where(work_id: @work.id).where(:is_active => true).order(:order).all

  end


  def windows


    @work = Work.friendly.find('pencereler')
    @parent = Work.select(:title_tr, :title_en).where(id: @work.parent_id).first


    @workName = I18n.locale == :tr  ? @work.title_tr : @work.title_en
    @parentName = I18n.locale == :tr  ? @parent.title_tr : @parent.title_en


    @title = @workName
    @description = @work.description
    @keywords = @work.keywords

    @work_details = WorkDetail.where(work_id: @work.id).where(:is_active => true).order(:order).all

  end
end