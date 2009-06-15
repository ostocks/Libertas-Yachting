class Testimonial < ActiveRecord::Base

  public
    # Random int
    @i = 0
  
    ## Get the last testimonials
    def self.get_last_testimonials
      self.find(:all, :limit => "3", :order => "created_at DESC")
    end
  
end
