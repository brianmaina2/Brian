class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    users = User.find_by(id: params[:id])
    render json: users
  end

  def create
    users = User.create(users_params)
    if users.save sessions
    session[:user_id] = user_id
    else
    render json: {error: 'Already exist'}
    end

  end

  def update
    users = User.find_by(id: params[:id])
    render json: users
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private
  def users_params
    params.permit(:name, :email, :password)
  end
end
