require 'test_helper'

class Admin::TypesControllerTest < ActionController::TestCase
  setup do
    @admin_type = admin_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_type" do
    assert_difference('Admin::Type.count') do
      post :create, admin_type: { code: @admin_type.code, is_active: @admin_type.is_active, language_id: @admin_type.language_id, text: @admin_type.text }
    end

    assert_redirected_to admin_type_path(assigns(:admin_type))
  end

  test "should show admin_type" do
    get :show, id: @admin_type
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_type
    assert_response :success
  end

  test "should update admin_type" do
    patch :update, id: @admin_type, admin_type: { code: @admin_type.code, is_active: @admin_type.is_active, language_id: @admin_type.language_id, text: @admin_type.text }
    assert_redirected_to admin_type_path(assigns(:admin_type))
  end

  test "should destroy admin_type" do
    assert_difference('Admin::Type.count', -1) do
      delete :destroy, id: @admin_type
    end

    assert_redirected_to admin_types_path
  end
end
