-- Insert data into locations table
INSERT INTO locations (location_name, location_manager) VALUES
('Annapolis, MD', 'Rita Ivanov'),
('Los Angeles, CA', 'Aaron Kamara'),
('Lincoln, NB', 'Farahd Mohamed'),
('Saskatchewan, CA', 'Amara Marquez');

-- Insert data into businesses table
INSERT INTO businesses (business_name, location_id) VALUES
('Prosser Lankovitch Products', 1),
('Ripley Enterprises', 2),
('Gormenghast, Inc.', 3),
('Nullhammer Corporation', 4);

-- Verify the data
SELECT * FROM businesses;
SELECT * FROM locations;
