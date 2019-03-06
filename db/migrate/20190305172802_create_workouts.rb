class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.string :body
      t.string :type, null: false
      t.float :distance
      t.integer  :duration, null: false
      t.integer :user_id, null: false
      t.integer :route_id
      t.timestamps
    end

    add_index :workouts, :user_id
    add_index :workouts, :route_id
    add_index :workouts, :type
  end
end
