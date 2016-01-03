require 'test_helper'

class Admin::WorkDetailsControllerTest < ActionController::TestCase
  setup do
    @admin_work_detail = admin_work_details(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_work_details)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_work_detail" do
    assert_difference('Admin::WorkDetail.count') do
      post :create, admin_work_detail: { is_active: @admin_work_detail.is_active, title: @admin_work_detail.title }
    end

    assert_redirected_to admin_work_detail_path(assigns(:admin_work_detail))
  end

  test "should show admin_work_detail" do
    get :show, id: @admin_work_detail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_work_detail
    assert_response :success
  end

  test "should update admin_work_detail" do
    patch :update, id: @admin_work_detail, admin_work_detail: { is_active: @admin_work_detail.is_active, title: @admin_work_detail.title }
    assert_redirected_to admin_work_detail_path(assigns(:admin_work_detail))
  end

  test "should destroy admin_work_detail" do
    assert_difference('Admin::WorkDetail.count', -1) do
      delete :destroy, id: @admin_work_detail
    end

    assert_redirected_to admin_work_details_path
  end
end
