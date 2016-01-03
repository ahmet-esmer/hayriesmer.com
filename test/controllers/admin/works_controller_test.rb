require 'test_helper'

class Admin::WorksControllerTest < ActionController::TestCase
  setup do
    @admin_work = admin_works(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_works)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_work" do
    assert_difference('Admin::Work.count') do
      post :create, admin_work: { is_active: @admin_work.is_active, order: @admin_work.order, title_en: @admin_work.title_en, title_tr: @admin_work.title_tr }
    end

    assert_redirected_to admin_work_path(assigns(:admin_work))
  end

  test "should show admin_work" do
    get :show, id: @admin_work
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_work
    assert_response :success
  end

  test "should update admin_work" do
    patch :update, id: @admin_work, admin_work: { is_active: @admin_work.is_active, order: @admin_work.order, title_en: @admin_work.title_en, title_tr: @admin_work.title_tr }
    assert_redirected_to admin_work_path(assigns(:admin_work))
  end

  test "should destroy admin_work" do
    assert_difference('Admin::Work.count', -1) do
      delete :destroy, id: @admin_work
    end

    assert_redirected_to admin_works_path
  end
end
