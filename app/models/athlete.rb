class Athlete < ApplicationRecord
    validates :email, :session_token, :password_digest, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validate :ensure_profile_photo

    after_initialize :ensure_session_token
    
    attr_reader :password

    has_many :routes,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: "Route"

    has_many :workouts

    has_one_attached :profile_photo

    def ensure_profile_photo
        if !self.profile_photo.attached?
            
        end
    end

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
end
