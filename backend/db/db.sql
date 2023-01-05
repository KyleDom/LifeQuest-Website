CREATE DATABASE bloodbankmanagementdb;

CREATE TABLE blood (
  blood_id int NOT NULL AUTO_INCREMENT,
  type varchar(45) DEFAULT NULL,
  donor_id int DEFAULT NULL,
  PRIMARY KEY (blood_id),
  CONSTRAINT blood_donor_id FOREIGN KEY (donor_id) REFERENCES donor (donor_id)
);

CREATE TABLE bloodBank (
  bloodBank_id int NOT NULL, 
  blood_id  int DEFAULT NULL,
  PRIMARY KEY (bloodBank_id),
  CONSTRAINT blood_type_id FOREIGN KEY (blood_id) REFERENCES blood (blood_id)
);	

CREATE TABLE user (
  User_id int NOT NULL AUTO_INCREMENT,
  username varchar(50) DEFAULT NULL,
  password varchar(45) DEFAULT NULL,
  address varchar(50) DEFAULT NULL,
  gender varchar(45) DEFAULT NULL,
  age int DEFAULT NULL,
  weight int DEFAULT NULL,
  height int DEFAULT NULL,
  blood_type_id int DEFAULT NULL,
  PRIMARY KEY (User_id),
  CONSTRAINT user_blood_type_id FOREIGN KEY (blood_type_id) REFERENCES blood (blood_id)
);

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

CREATE TABLE donor (
  donor_id int NOT NULL AUTO_INCREMENT,
  user_id int DEFAULT NULL,
  donor_details varchar(45) DEFAULT NULL,
  PRIMARY KEY (donor_id),
  CONSTRAINT user_id_donor FOREIGN KEY (user_id) REFERENCES user (User_id)
);

CREATE TABLE recipient (
  recepient_id int NOT NULL AUTO_INCREMENT,
  user_id int DEFAULT NULL,
  recepient_details varchar(45) DEFAULT NULL,
  PRIMARY KEY (recepient_id),
  CONSTRAINT user_id_recepient FOREIGN KEY (user_id) REFERENCES user (User_id)
);
