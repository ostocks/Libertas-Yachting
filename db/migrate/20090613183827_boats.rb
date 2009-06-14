class Boats < ActiveRecord::Migration
  def self.up

    ###
    # has_one description
    # has_one type
    # has_many prices
    # has_and_belongs_to_many marinas
    create_table :boats, :force => true do |t|
      t.string  :value,  :limit => 40, :null => false
      t.boolean :operationali, :null => false
      t.references :type, :null => false
      t.references :description, :null => false
      t.timestamps
    end
    #

    # photos
    create_table :photos, :force => true do |p|
      p.string :filename
      p.string :item, :null => false # class can be Marina / Boat ect.
      p.integer :element_id, :null => false
      p.timestamps
    end
    #
    
    # marinas
    create_table :marinas, :force => true do |a|
      a.string :town, :null => false
      a.string :adress
    end
    
    # habtm boats=>marinas
    create_table :boats_marinas, :id => false do |m|
      m.references :boat, :null => false
      m.references :marina, :null => false
    end
    #
    
    # NOTE: Added price as a string for the different currencies
    create_table :prices, :force => true do |p|
      p.date    :from
      p.date    :to
      p.string  :price
      p.references :boat, :null => false
      p.timestamps
    end
    #
    
    #
    create_table :types, :force => true do |u|
      u.string  :value, :null => false
      u.timestamps
    end
    #

    #
    create_table :descriptions, :force => true do |d|
      d.integer :produced
      d.integer :lenght
      d.integer :beam
      d.integer :motor
      d.integer :cabins
      d.integer :berths
      d.integer :shower
      d.integer :toilette
    end
    #
    
    # indexes
    add_index :boats, :type_id
    add_index :boats, :description_id
    add_index :prices, :boat_id
    add_index :boats_marinas, :boat_id
    add_index :boats_marinas, :marina_id
    add_index :photos, :element_id
    
  def self.down
    drop_table :boats
    drop_table :types
    drop_table :descriptions
    drop_table :prices
    drop_table :photos
    drop_table :marinas
    drop_table :boats_marinas
  end
  end
  end
