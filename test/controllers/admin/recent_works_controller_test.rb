require 'test_helper'

class Admin::RecentWorksControllerTest < ActionController::TestCase
  setup do
    @admin_recent_work = admin_recent_works(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_recent_works)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_recent_work" do
    assert_difference('Admin::RecentWork.count') do
      post :create, admin_recent_work: { href: @admin_recent_work.href, is_active: @admin_recent_work.is_active, language_id: @admin_recent_work.language_id, order: @admin_recent_work.order, text: @admin_recent_work.text, title: @admin_recent_work.title }
    end

    assert_redirected_to admin_recent_work_path(assigns(:admin_recent_work))
  end

  test "should show admin_recent_work" do
    get :show, id: @admin_recent_work
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_recent_work
    assert_response :success
  end

  test "should update admin_recent_work" do
    patch :update, id: @admin_recent_work, admin_recent_work: { href: @admin_recent_work.href, is_active: @admin_recent_work.is_active, language_id: @admin_recent_work.language_id, order: @admin_recent_work.order, text: @admin_recent_work.text, title: @admin_recent_work.title }
    assert_redirected_to admin_recent_work_path(assigns(:admin_recent_work))
  end

  test "should destroy admin_recent_work" do
    assert_difference('Admin::RecentWork.count', -1) do
      delete :destroy, id: @admin_recent_work
    end

    assert_redirected_to admin_recent_works_path
  end
end
