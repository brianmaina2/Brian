class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create]
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: 'wrong input' }, status: :unauthorized
        end
       end
       def destroy
        session.delete :user_id
        head :no_content
       end
end