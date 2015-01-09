class Admin::DashboardController < ApplicationController

  before_filter :authorize

  layout "application_admin"

  def index
  end

end