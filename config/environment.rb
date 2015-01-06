# Load the Rails application.
require File.expand_path('../application', __FILE__)

#require 'Overrides'

# Initialize the Rails application.
Rails.application.initialize!


Time::DATE_FORMATS.merge!(:default => '%d/%m/%Y %H:%M')
Date::DATE_FORMATS.merge!(:default => '%d/%m/%Y')


