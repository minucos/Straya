class Athlete < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    
    attr_reader :password

    has_many :routes,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: "Route"

    has_many :workouts

    has_many :in_follows,
        foreign_key: :followee_id,
        class_name: "Follow"
    
    has_many :out_follows,
        foreign_key: :follower_id,
        class_name: "Follow"
    
    has_many :followers,
        through: :in_follows,
        source: :follower

    has_many :followees,
        through: :out_follows,
        source: :followee

    has_many :followed_workouts,
        through: :followees,
        source: :workouts

    has_many :followed_routes,
        through: :followees,
        source: :routes 

    has_one_attached :profile_photo

    def self.find_by_credentials(email, password)
        athlete = Athlete.find_by(email: email)
        
        if athlete && athlete.is_password?(password)
            athlete
        else 
            nil 
        end
    end 
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 
    
    def generate_session_token!
        SecureRandom::urlsafe_base64
    end 
    
    def ensure_session_token
        self.session_token ||= self.generate_session_token!
    end 

    def reset_session_token!
        self.session_token = generate_session_token!
        self.save!
        self.session_token 
    end 

    def news_feed
        all_workouts = current_user.workouts + current_user.followed_workouts
        all_routes = current_user.routes + current_user.followed_routes
        all_items = all_workouts + all_routes
        @newsfeed = all_items.sort { |a,b| a.created_at <=> b.created_at }
    end
end
