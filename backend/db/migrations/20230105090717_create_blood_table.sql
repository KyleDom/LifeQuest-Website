-- migrate:up
CREATE TABLE blood (
  blood_id int NOT NULL AUTO_INCREMENT,
  type varchar(45) DEFAULT NULL,
  donor_id int DEFAULT NULL,
  PRIMARY KEY (blood_id)
);

-- migrate:down

