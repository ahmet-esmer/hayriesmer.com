require 'test_helper'

class Admin::CarouselsControllerTest < ActionController::TestCase
  setup do
    @admin_carousel = admin_carousels(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:admin_carousels)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create admin_carousel" do
    assert_difference('Admin::Carousel.count') do
      post :create, admin_carousel: { href: @admin_carousel.href, is_active: @admin_carousel.is_active, language_id: @admin_carousel.language_id, order: @admin_carousel.order, text: @admin_carousel.text, title: @admin_carousel.title }
    end

    assert_redirected_to admin_carousel_path(assigns(:admin_carousel))
  end

  test "should show admin_carousel" do
    get :show, id: @admin_carousel
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @admin_carousel
    assert_response :success
  end

  test "should update admin_carousel" do
    patch :update, id: @admin_carousel, admin_carousel: { href: @admin_carousel.href, is_active: @admin_carousel.is_active, language_id: @admin_carousel.language_id, order: @admin_carousel.order, text: @admin_carousel.text, title: @admin_carousel.title }
    assert_redirected_to admin_carousel_path(assigns(:admin_carousel))
  end

  test "should destroy admin_carousel" do
    assert_difference('Admin::Carousel.count', -1) do
      delete :destroy, id: @admin_carousel
    end

    assert_redirected_to admin_carousels_path
  end
end
