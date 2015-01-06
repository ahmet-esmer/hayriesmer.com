module ApplicationHelper

  def flash_class(type)

    case type
      when 'notice' then 'alert alert-info'
      when 'success' then 'alert alert-success'
      when 'error' then 'alert alert-danger'
      when 'alert' then 'alert alert-warning'
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


end
