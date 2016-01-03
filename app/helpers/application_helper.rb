module ApplicationHelper

  def flash_class(type)

    case type
      when 'notice' then 'alert alert-info'
      when 'success' then 'alert alert-success'
      when 'error' then 'alert alert-danger'
      when 'alert' then 'alert alert-warning'
    end
  end


  def flash_class_for_site(type)

    case type
      when 'notice' then 'notification success closeable'
      when 'success' then 'notification success closeable'
      when 'error' then 'notification error closeable'
      when 'alert' then 'notification error closeable'
    end
  end

  def flash_icon_class(type)

    case type
      when 'notice' then  'glyphicon glyphicon-info-sign'
      when 'success' then 'glyphicon glyphicon-ok-sign'
      when 'error' then   'glyphicon glyphicon-exclamation-sign'
      when 'alert' then   'glyphicon glyphicon-warning-sign'
    end
  end


  def get_works_url(firstTitle, lastTitle)

    case firstTitle
      when 'resimler'    then  resimler_path(lastTitle)
      when 'gravurler'   then  gravurler_path(lastTitle)
      when 'cizimler'    then  cizimler_path(lastTitle)
      when 'diger-kolaj' then  diger_kolaj_path(lastTitle)
    end

  end


  def article_type(type)

    case type
      when 'ARTICLES' then  translate('articles')
      when 'BIBLIOGRAPHY' then translate('bibliography')
      when 'CRITICISM' then   translate('criticism')
    end
  end

  def boolean_type(type)

    case type
      when true then  '<span class="label label-success">Evet</span>'
      when false then '<span class="label label-danger">Hayır</span>'
    end
  end

  def status_type(type)

    case type
      when true then  '<span class="label label-success">Aktif</span>'
      when false then '<span class="label label-danger">Pasif</span>'
    end
  end

  def render_title
    return @title if defined?(@title)
    "Hayri Esmer"
  end

  def render_description
    return @description if defined?(@description)
  end

  def render_keywords
    return @keywords if defined?(@keywords)
  end
end
