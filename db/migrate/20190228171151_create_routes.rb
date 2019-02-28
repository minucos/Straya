class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.integer :creator_id, null: false
      t.timestamps
    end

    add_index :routes, :creator_id
    add_index :routes, :location
  end
end
