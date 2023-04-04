class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :transaction_type
      t.integer :amount
      t.datetime :date

      t.timestamps
    end
  end
end
