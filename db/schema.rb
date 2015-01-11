# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150111230528) do

  create_table "articles", force: true do |t|
    t.string   "name"
    t.text     "body"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "title",       limit: 200
    t.string   "description", limit: 300
    t.string   "keywords",    limit: 300
    t.integer  "view_count"
    t.integer  "order"
    t.integer  "language_id"
  end

  create_table "carousels", force: true do |t|
    t.string   "title",              limit: 60
    t.string   "text",               limit: 500
    t.string   "href",               limit: 500
    t.integer  "order"
    t.boolean  "is_active"
    t.integer  "language_id"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  add_index "carousels", ["language_id"], name: "index_carousels_on_language_id", using: :btree

  create_table "ckeditor_assets", force: true do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "exhibition_works", force: true do |t|
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.string   "title",              limit: 100
    t.boolean  "is_active"
    t.integer  "exhibition_id"
  end

  add_index "exhibition_works", ["exhibition_id"], name: "index_exhibition_works_on_exhibition_id", using: :btree

  create_table "exhibitions", force: true do |t|
    t.string   "title_tr",      limit: 60
    t.string   "title_en",      limit: 60
    t.string   "text_tr",       limit: 500
    t.string   "text_en",       limit: 500
    t.date     "start_at"
    t.date     "end_at"
    t.boolean  "is_individual"
    t.boolean  "is_active"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "languages", force: true do |t|
    t.string  "name",      limit: 25
    t.string  "code",      limit: 5
    t.string  "icon",      limit: 25
    t.boolean "is_active"
  end

  create_table "links", force: true do |t|
    t.string  "text",        limit: 100
    t.string  "href",        limit: 500
    t.integer "order"
    t.boolean "is_active"
    t.integer "language_id"
  end

  add_index "links", ["language_id"], name: "index_links_on_language_id", using: :btree

  create_table "recent_works", force: true do |t|
    t.string   "title",              limit: 60
    t.string   "text",               limit: 500
    t.string   "href",               limit: 500
    t.integer  "order"
    t.boolean  "is_active"
    t.integer  "language_id"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  add_index "recent_works", ["language_id"], name: "index_recent_works_on_language_id", using: :btree

  create_table "types", force: true do |t|
    t.string  "code",        limit: 100
    t.text    "text"
    t.boolean "is_active"
    t.integer "language_id"
  end

  add_index "types", ["language_id"], name: "index_types_on_language_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "user_name",       limit: 25
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
