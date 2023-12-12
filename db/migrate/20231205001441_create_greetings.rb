class CreateGreetings < ActiveRecord::Migration[7.1]
  def change
    create_table :greetings do |t|
      t.string :text, null: false, default: ''

      t.timestamps
    end
  end
end
