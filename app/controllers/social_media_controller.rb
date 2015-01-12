class SocialMediaController < ApplicationController


  def twitter
    @twitter = Rails.cache.read('twitter')
    if @twitter.nil?
      @@client = Twitter::REST::Client.new do |config|
        config.consumer_key        = "0g38H8XLixekfh85qOwNKZRrr"
        config.consumer_secret     = "tMo6jg515cfK25ZaHzEEXVSLP2FOD9QxBhxRTXlrviLWmF6DQk"
        config.access_token        = "332183668-lIbxi4pZoX5oRD4UgwDM4fGHF1EclFSYJlUHXKeU"
        config.access_token_secret = "Al6TbJtVWJoVpfWDxHXuU11KL8wApmPj64XX5dM53Wn7g"
      end
      @twitter = @@client.user_timeline({ :count => 3, :include_rts => false })
      Rails.cache.write('twitter', @twitter, expires_in: 10.minute)

      puts 'Twitter canlı data'
    end
    render json: @twitter
  end

  def instagram
    @instagram = Rails.cache.read('instagram')
    if @instagram.nil?
      @instagram = Instagram.user_recent_media("1080343853", {:count => 9})
      Rails.cache.write('instagram', @instagram, expires_in: 10.minute)
      puts 'yok'
    end
    render json: @instagram
  end

end