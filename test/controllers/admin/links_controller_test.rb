require 'test_helper'

class Admin::LinksControllerTest < ActionController::TestCase
  setup do
    @admin_link = admin_links(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_links)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_link" do
    assert_difference('Admin::Link.count') do
      post :create, admin_link: { href: @admin_link.href, is_active: @admin_link.is_active, language_id: @admin_link.language_id, order: @admin_link.order, text: @admin_link.text }
    end

    assert_redirected_to admin_link_path(assigns(:admin_link))
  end

  test "should show admin_link" do
    get :show, id: @admin_link
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_link
    assert_response :success
  end

  test "should update admin_link" do
    patch :update, id: @admin_link, admin_link: { href: @admin_link.href, is_active: @admin_link.is_active, language_id: @admin_link.language_id, order: @admin_link.order, text: @admin_link.text }
    assert_redirected_to admin_link_path(assigns(:admin_link))
  end

  test "should destroy admin_link" do
    assert_difference('Admin::Link.count', -1) do
      delete :destroy, id: @admin_link
    end

    assert_redirected_to admin_links_path
  end
end
