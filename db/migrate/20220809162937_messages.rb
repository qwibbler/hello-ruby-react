class Messages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :text

      t.timestamps
    end
  end
end