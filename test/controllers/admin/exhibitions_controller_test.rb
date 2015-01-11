require 'test_helper'

class Admin::ExhibitionsControllerTest < ActionController::TestCase
  setup do
    @admin_exhibition = admin_exhibitions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_exhibitions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_exhibition" do
    assert_difference('Admin::Exhibition.count') do
      post :create, admin_exhibition: { end_at: @admin_exhibition.end_at, is_active: @admin_exhibition.is_active, is_individual: @admin_exhibition.is_individual, start_at: @admin_exhibition.start_at, text_en: @admin_exhibition.text_en, text_tr: @admin_exhibition.text_tr, title_en: @admin_exhibition.title_en, title_tr: @admin_exhibition.title_tr }
    end

    assert_redirected_to admin_exhibition_path(assigns(:admin_exhibition))
  end

  test "should show admin_exhibition" do
    get :show, id: @admin_exhibition
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_exhibition
    assert_response :success
  end

  test "should update admin_exhibition" do
    patch :update, id: @admin_exhibition, admin_exhibition: { end_at: @admin_exhibition.end_at, is_active: @admin_exhibition.is_active, is_individual: @admin_exhibition.is_individual, start_at: @admin_exhibition.start_at, text_en: @admin_exhibition.text_en, text_tr: @admin_exhibition.text_tr, title_en: @admin_exhibition.title_en, title_tr: @admin_exhibition.title_tr }
    assert_redirected_to admin_exhibition_path(assigns(:admin_exhibition))
  end

  test "should destroy admin_exhibition" do
    assert_difference('Admin::Exhibition.count', -1) do
      delete :destroy, id: @admin_exhibition
    end

    assert_redirected_to admin_exhibitions_path
  end
end
