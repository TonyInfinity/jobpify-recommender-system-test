class AddDeadlineToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :job_deadline, :datetime
  end
end
