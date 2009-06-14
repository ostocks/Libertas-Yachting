# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20090614173401) do

  create_table "boats", :force => true do |t|
    t.string   "value",          :limit => 40, :null => false
    t.boolean  "operationali",                 :null => false
    t.integer  "type_id",                      :null => false
    t.integer  "description_id",               :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "boats", ["description_id"], :name => "index_boats_on_description_id"
  add_index "boats", ["type_id"], :name => "index_boats_on_type_id"

  create_table "boats_marinas", :id => false, :force => true do |t|
    t.integer "boat_id",   :null => false
    t.integer "marina_id", :null => false
  end

  add_index "boats_marinas", ["boat_id"], :name => "index_boats_marinas_on_boat_id"
  add_index "boats_marinas", ["marina_id"], :name => "index_boats_marinas_on_marina_id"

  create_table "descriptions", :force => true do |t|
    t.integer "produced"
    t.integer "lenght"
    t.integer "beam"
    t.integer "motor"
    t.integer "cabins"
    t.integer "berths"
    t.integer "shower"
    t.integer "toilette"
  end

  create_table "marinas", :force => true do |t|
    t.string "town",   :null => false
    t.string "adress"
  end

  create_table "photos", :force => true do |t|
    t.string   "filename"
    t.string   "item",       :null => false
    t.integer  "element_id", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "photos", ["element_id"], :name => "index_photos_on_element_id"

  create_table "prices", :force => true do |t|
    t.date     "from"
    t.date     "to"
    t.string   "price"
    t.integer  "boat_id",    :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "prices", ["boat_id"], :name => "index_prices_on_boat_id"

  create_table "testimonials", :force => true do |t|
    t.string   "title"
    t.string   "author"
    t.string   "testimonial"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "types", :force => true do |t|
    t.string   "value",      :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
