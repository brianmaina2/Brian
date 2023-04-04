class TransactionsController < ApplicationController
    def index
        render json:Transaction.all  
    end
    def show
        transaction = Transaction.find_by(id: params[:id])
        render json: transaction
    end
    def create
        transaction = Transaction.create(transaction_params)
        render json: transaction
    end
    def update
        transaction = Transaction.find_by(id: params[:id])
        transaction.update(transaction_params)
        render json: transaction
    end
    def destroy
        transaction = Transaction.find_by(id: params[:id])
        transaction.destroy
        render json: transaction
    end
    private
    def transaction_params
        params.permit(:transaction_type, :amount, :date)
    end
end
