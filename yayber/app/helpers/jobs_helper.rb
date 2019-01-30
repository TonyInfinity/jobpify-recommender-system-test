module JobsHelper

    def job_type(job_type)
        if job_type == "Toàn thời gian"
            content_tag :span, "#{job_type}", class: "tag is-success"
        elsif job_type == "Bán thời gian"
            content_tag :span, "#{job_type}", class: "tag is-link"
        elsif job_type == "Tự do"
            content_tag :span, "#{job_type}", class: "tag is-warning"
        elsif job_type == "Hợp đồng"
            content_tag :span, "#{job_type}", class: "tag is-info"
        elsif job_type == "Thực tập"
            content_tag :span, "#{job_type}", class: "tag is-danger"
        else
            ""
        end
    end
    
    def location(location)
        if location == "Bạc Liêu"
            content_tag :span, "#{location}", class: "tag is-success"
        elsif location == "Sóc Trăng"
            content_tag :span, "#{location}", class: "tag is-link"
        elsif location == "Cần Thơ"
            content_tag :span, "#{location}", class: "tag is-warning"
        else
            ""
        end
    end

    def job_author(job) 
        user_signed_in? && current_user.id == job.user_id
    end
end
