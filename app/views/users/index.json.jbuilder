json.array! @users.each do |user|
  json.id     user.id
  json.name   user.name
end