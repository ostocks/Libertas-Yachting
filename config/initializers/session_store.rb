# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_libertas-yachting_session',
  :secret      => '13e9540f4c0dd09bd9643b6abb3e3a0ffee96c0fcd266c7df0cca205df1ca6863860bdcee4a264ab1e60899c1e594d52676e1605ddca980f25b0d8dace173ff8'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
