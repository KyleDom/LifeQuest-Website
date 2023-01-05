-- migrate:up
CREATE TABLE recipient (
  recepient_id int NOT NULL AUTO_INCREMENT,
  user_id int DEFAULT NULL,
  recepient_details varchar(45) DEFAULT NULL,
  PRIMARY KEY (recepient_id),
  CONSTRAINT user_id_recepient FOREIGN KEY (user_id) REFERENCES user (User_id)
);

-- migrate:down

