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

ActiveRecord::Schema.define(version: 20150106171600) do

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

  create_table "users", force: true do |t|
    t.string   "user_name",       limit: 25
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
