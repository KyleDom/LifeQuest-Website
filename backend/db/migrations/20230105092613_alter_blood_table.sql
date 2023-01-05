-- migrate:up
ALTER TABLE blood
ADD CONSTRAINT blood_donor_id FOREIGN KEY (donor_id) REFERENCES donor (donor_id);

-- migrate:down

