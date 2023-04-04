class ApplicationController < ActionController::API
    before_action :require_login
    include ActionController::Cookies

    def user
       user ||= User.find_by(id: session[:user_id])
    end

    def require_login
        render json: {error: "Please Login" },status: :unauthorized unless user
    end

end
