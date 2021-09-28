-- :name create-persons-table
-- :command :execute
-- :result :raw
CREATE TABLE persons (
       id SERIAL PRIMARY KEY,
       full_name TEXT,
       gender TEXT,
       birth_date TEXT,
       address TEXT,
       insurance_policy_number NUMBER,
       created_at TIMESTAMP NOT NULL DEFAULT current_timestamp 
);

-- :name get-persons :? :*
SELECT * FROM persons;

-- :name get-person-by-id :? :*
SELECT * FROM persons
WHERE id = :id;

-- :name insert-person :insert :*
INSERT INTO persons (full_name,
       gender,
       birth_date,
       address,
       insurance_policy_number)
VALUES (:full-name,
       :gender,
       :birth-date,
       :address,
       :insurance-policy-number)
RETURNING id;

-- :name update-person-by-id :! :1
UPDATE persons
SET full_name = :full-name, gender = :gender, birth_date = :birth-date, address = :address,
    insurance_policy_number = :insurance-policy-number
WHERE id = :id;

-- :name delete-person-by-id :! :1 
DELETE FROM persons WHERE id = :id;
