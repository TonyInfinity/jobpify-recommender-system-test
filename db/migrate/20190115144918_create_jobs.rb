class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.string :url
      t.string :job_type
      t.string :location
      t.string :job_author
      t.boolean :remote_ok
      t.string :apply_url

      t.timestamps null: false
    end
  end
end
