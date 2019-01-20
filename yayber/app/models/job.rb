class Job < ActiveRecord::Base
    mount_uploader :avatar, AvatarUploader
end
