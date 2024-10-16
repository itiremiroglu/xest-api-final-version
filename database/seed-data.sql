/* Initialize DB with some seed data */
USE `xest_api_final_version_db`;

-- DONT MODIFY THIS MIGRATION
-- it is used by Xest local development pipeline
INSERT INTO `migrations` (
  name,
  run_on
) VALUES (
  "/20211107064324-seed-data",
  "20211107064324"
);

-- YOU CAN MODIFY BELOW THIS LINE
INSERT INTO user_types (user_type_id, user_type)
VALUES (1, "admin");
INSERT INTO user_types (user_type_id, user_type)
VALUES (2, "user");

INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (1, "Ahmet", "Akinsql", "ahmet@akinsql.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 1, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (2, "Joe", "Bloggs","joebloggs@gmail.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 2, "2020-11-20 12:00:00");
INSERT INTO users (user_id, first_name, last_name, email, password, user_type_id, created_at)
VALUES (3, "Jim", "Bloggs" , "jimbloggs@yahoo.com", SHA2(CONCAT("password","SECRET_SALT"), 224), 2, "2020-11-20 12:00:00");

INSERT INTO password_recovery_requests(shortcode,requested_email,expiry_date,created_at)
VALUES ("321","ahmet@akinsql.com","2020-09-20 12:30:00","2022-01-03 12:30:00");

INSERT INTO doctor(first_name, last_name, specialization)
VALUES ("Alysa", "Marquardt", "Forward Tactics Specialist");
SET @doctor_1 = LAST_INSERT_ID();

INSERT INTO patient(patient_name, patient_address, patient_age, patient_gender, patient_phone_number, patient_email, status)
VALUES("Hassan", "0204 Lynch River", 63884, "Transgender Female", "(426) 864-6761 x5880", "Harrison.Rosenbaum58@yahoo.com", "Representative");
SET @patient_1 = LAST_INSERT_ID();

INSERT INTO slot(doctor_id, start_time, end_time, availability)
VALUES(@doctor_1, "2024-07-09T22:41:13.000Z", "2024-03-25T11:22:47.000Z", "Associate");
SET @slot_1 = LAST_INSERT_ID();

INSERT INTO appointment(patient_id, doctor_id, slot_id, appointment_date, status)
VALUES(@patient_1, @doctor_1, @slot_1, "2024-01-27T08:03:47.000Z", "bigint");
SET @appointment_1 = LAST_INSERT_ID();