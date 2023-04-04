

# 5.times do 
#     user = User.new(
#       name: Faker::Name.name,
#       email: Faker::Internet.email,
#       phone_number: Faker::PhoneNumber.phone_number
#     )
#     user.save
# end

5.times do
    transaction = Transaction.new(
      transaction_type: Faker::Commerce.department(max: 1),
      amount: Faker::Number.between(from: 100, to: 10000),
      date: Faker::Date.backward(days: 365),
      # user_id: User.pluck(:id).sample,
      # account_id: Account.pluck(:id).sample
    )
    transaction.save
end

5.times do
    account = Account.new(
      account_number: Faker::Number.between(from: 20000, to: 50000),
      balance: Faker::Number.between(from: 0, to: 10000),
      # user_id: User.pluck(:id).sample
    )
    account.save
 end
    puts "succesful"
