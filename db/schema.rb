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

ActiveRecord::Schema.define(version: 20160404135643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "url",        null: false
    t.text     "body",       null: false
    t.string   "image_url"
    t.date     "pub_date",   null: false
    t.integer  "feed_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "articles", ["feed_id"], name: "index_articles_on_feed_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["user_id"], name: "index_categories_on_user_id", using: :btree

  create_table "feeds", force: :cascade do |t|
    t.string   "url",        null: false
    t.string   "name",       null: false
    t.datetime "updated_at", null: false
    t.datetime "created_at", null: false
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "feed_id",     null: false
  end

  add_index "subscriptions", ["category_id", "feed_id"], name: "index_subscriptions_on_category_id_and_feed_id", unique: true, using: :btree
  add_index "subscriptions", ["category_id"], name: "index_subscriptions_on_category_id", using: :btree
  add_index "subscriptions", ["feed_id"], name: "index_subscriptions_on_feed_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
