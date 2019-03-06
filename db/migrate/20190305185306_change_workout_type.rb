class ChangeWorkoutType < ActiveRecord::Migration[5.2]
  def change
    rename_column :workouts, :type, :workout_type
  end
end
