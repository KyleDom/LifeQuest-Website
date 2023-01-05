-- migrate:up
CREATE TABLE donor (
  donor_id int NOT NULL AUTO_INCREMENT,
  user_id int DEFAULT NULL,
  donor_details varchar(45) DEFAULT NULL,
  PRIMARY KEY (donor_id),
  CONSTRAINT user_id_donor FOREIGN KEY (user_id) REFERENCES user (User_id)
);

-- migrate:down

