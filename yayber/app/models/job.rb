class Job < ActiveRecord::Base
    mount_uploader :avatar, AvatarUploader
    
    def self.search(search)
        if search
            #find(:jobs, :conditions => ['title LIKE ?', "%#{search}%"])
            where(['title LIKE ?',"%#{search}%"])
        else
            all
        end
    end
    
end
