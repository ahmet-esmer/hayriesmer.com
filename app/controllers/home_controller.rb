class HomeController < ApplicationController

  layout "application_site"

  require "twitter"

  def index



    @@client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "0g38H8XLixekfh85qOwNKZRrr"
      config.consumer_secret     = "tMo6jg515cfK25ZaHzEEXVSLP2FOD9QxBhxRTXlrviLWmF6DQk"
      config.access_token        = "332183668-lIbxi4pZoX5oRD4UgwDM4fGHF1EclFSYJlUHXKeU"
      config.access_token_secret = "Al6TbJtVWJoVpfWDxHXuU11KL8wApmPj64XX5dM53Wn7g"
    end





    @twitter = @@client.user_timeline( count: 10)



  end
end
