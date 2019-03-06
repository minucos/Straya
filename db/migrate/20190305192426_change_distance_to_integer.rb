class ChangeDistanceToInteger < ActiveRecord::Migration[5.2]
  def change
    change_column :workouts, :distance, :integer
  end
end
