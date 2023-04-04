class AccountsController < ApplicationController
    def index
        account= Account.all
        render json: account
    end
    def show
        account= Account.find_by(id: params[:id])
        render json: account
    end
    def create
        account= Account.create(account_params)
        render json: account
    end
    def update
        account= Account.find_by(id: params[:id])
        account.update(account_params)
        render json: account
    end
    def destroy
        account= Account.find_by(id: params[:id])
        account.destroy
        render json: account
    end
    private
    def account_params
        params.permit(:account_number, :balance)
    end
    
end
