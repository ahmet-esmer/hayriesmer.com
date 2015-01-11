require 'test_helper'

class Admin::ExhibitionWorksControllerTest < ActionController::TestCase
  setup do
    @admin_exhibition_work = admin_exhibition_works(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_exhibition_works)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_exhibition_work" do
    assert_difference('Admin::ExhibitionWork.count') do
      post :create, admin_exhibition_work: { is_active: @admin_exhibition_work.is_active, title: @admin_exhibition_work.title }
    end

    assert_redirected_to admin_exhibition_work_path(assigns(:admin_exhibition_work))
  end

  test "should show admin_exhibition_work" do
    get :show, id: @admin_exhibition_work
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_exhibition_work
    assert_response :success
  end

  test "should update admin_exhibition_work" do
    patch :update, id: @admin_exhibition_work, admin_exhibition_work: { is_active: @admin_exhibition_work.is_active, title: @admin_exhibition_work.title }
    assert_redirected_to admin_exhibition_work_path(assigns(:admin_exhibition_work))
  end

  test "should destroy admin_exhibition_work" do
    assert_difference('Admin::ExhibitionWork.count', -1) do
      delete :destroy, id: @admin_exhibition_work
    end

    assert_redirected_to admin_exhibition_works_path
  end
end
