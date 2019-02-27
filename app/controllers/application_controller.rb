class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    # REMOVE AFTER TESTING
    skip_before_action :verify_authenticity_token

    def login!(user)
        session[:session_token] = user.reset_session_token!

        @current_user = user
    end 

    def logout!
        @current_user.reset_session_token!

        session[:session_token] = nil
    end 

    def current_user
        @current_user ||= Athlete.find_by(session_token: session[:session_token])
    end 

    def logged_in?
        !!current_user
    end 

    
end
