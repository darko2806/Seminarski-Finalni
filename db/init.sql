SET GLOBAL log_error_verbosity = 1;
ALTER USER 'student'@'%' IDENTIFIED WITH caching_sha2_password BY 'student';
GRANT ALL PRIVILEGES ON swfavorites.* TO 'student'@'%';
FLUSH PRIVILEGES;
EXIT;