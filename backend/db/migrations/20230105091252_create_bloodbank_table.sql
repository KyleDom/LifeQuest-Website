-- migrate:up
CREATE TABLE bloodBank (
  bloodBank_id int NOT NULL, 
  blood_id  int DEFAULT NULL,
  PRIMARY KEY (bloodBank_id),
  CONSTRAINT blood_type_id FOREIGN KEY (blood_id) REFERENCES blood (blood_id)
);

-- migrate:down

