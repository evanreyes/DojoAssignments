SELECT CONCAT(users.first_name, ' ', users.last_name) as Rider, CONCAT(users2.first_name, ' ', users2.last_name) as Friend
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 on friendships.friend_id = users2.id;
