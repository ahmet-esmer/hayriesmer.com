class HomeController < ApplicationController
  def index
    @instagram = Instagram.user_recent_media("1080343853", {:count => 8})
  end
end
