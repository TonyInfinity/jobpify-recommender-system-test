class Job < ActiveRecord::Base
    mount_uploader :avatar, AvatarUploader
    
    def self.search(search)
        if search
            where(['title LIKE ? or description LIKE ?', "%#{search}%", "%#{search}%"])
        else
            all
        end
    end
end
