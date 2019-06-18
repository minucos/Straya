class UpdateWorkoutDistanceToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :workouts, :distance, :float, null: false
  end
end
