-- migrate:up
CREATE TABLE admin (
  admin_id int NOT NULL AUTO_INCREMENT,
  user_id int DEFAULT NULL,
  username varchar(45) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  contact_number int DEFAULT NULL,
  address varchar(45) DEFAULT NULL,
  PRIMARY KEY (admin_id),
  CONSTRAINT user_id_admin FOREIGN KEY (user_id) REFERENCES user (User_id)
);

-- migrate:down

