class UpdateWorkoutsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :workouts, :user_id, :athlete_id
  end
end
