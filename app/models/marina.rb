class Marina < ActiveRecord::Base

  ##
  # Marinas.
  #
  ##
  
  # Define the relation: 
  
  # it should have many photos 
  has_many                :marinas_photos
  
  # Can have maby boats and boats can be in many (or close to many marinas)
  has_and_belongs_to_many :boats

  public 
    ##
    # Every marina needs an illustration picture    
    def self.get_illustration_image
      self.marinas_photos.find(:all, :conditions => ['illustration', true], :limit => 1)
    end
  
  
  
  private
end
