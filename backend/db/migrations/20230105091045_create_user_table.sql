-- migrate:up
CREATE TABLE user (
  User_id int NOT NULL AUTO_INCREMENT,
  fullName varchar(200) DEFAULT NULL,
  username varchar(50) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  address varchar(50) DEFAULT NULL,
  gender varchar(45) DEFAULT NULL,
  age int DEFAULT NULL,
  weight int DEFAULT NULL,
  height int DEFAULT NULL,
  mobileNumber int DEFAULT NULL
  blood_type_id int DEFAULT NULL,
  PRIMARY KEY (User_id),
  CONSTRAINT user_blood_type_id FOREIGN KEY (blood_type_id) REFERENCES blood (blood_id)
);

-- migrate:down

