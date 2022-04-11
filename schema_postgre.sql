-- MySQL Workbench Forward Engineering


-- -----------------------------------------------------
-- Schema projectSchema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projectSchema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS  "projectSchema" ;

-- -----------------------------------------------------
-- Table "projectSchema"."Agent"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Agent" (
  "email" VARCHAR(255) NOT NULL,
  "fname" VARCHAR(255) NOT NULL,
  "lname" VARCHAR(255) NOT NULL,
  "phone_num" VARCHAR(255) NULL,
  "city" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("email"),


-- -----------------------------------------------------
-- Table "projectSchema"."Client"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Client" (
  "email" VARCHAR(255) NOT NULL,
  "fname" VARCHAR(255) NOT NULL,
  "lname" VARCHAR(255) NOT NULL,
  "phone_num" VARCHAR(255) NULL,
  "agent_email" VARCHAR(255) NULL,
  PRIMARY KEY ("email"),
  CONSTRAINT "fk_Client_Agent"
    FOREIGN KEY ("agent_email")
    REFERENCES "projectSchema"."Agent" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Contact"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Contact" (
  "email" VARCHAR(255) NOT NULL,
  "client_email" VARCHAR(255) NOT NULL,
  "fname" VARCHAR(255) NOT NULL,
  "lname" VARCHAR(255) NOT NULL,
  "phone_num" VARCHAR(255) NULL,
  "relationship" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("email", "client_email"),
  CONSTRAINT "fk_Contact_Client1"
    FOREIGN KEY ("client_email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Requirement"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Requirement" (
  "id" INT NOT NULL ,
  "YearBuilt" YEAR NULL,
  "TotalSqFeet" INT NULL,
  "No_of_Bathrooms" INT NULL,
  "No_of_Bedrooms" INT NULL,
  "Neighbourhood" VARCHAR(255) NULL,
  "Yard" INT NULL,
  PRIMARY KEY ("id"));


-- -----------------------------------------------------
-- Table "projectSchema"."Buyer"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Buyer" (
  "email" VARCHAR(255) NOT NULL,
  "budget" INT NOT NULL,
  "type" VARCHAR(255) NOT NULL,
  "Requirement_id" INT NOT NULL,
  PRIMARY KEY ("email"),
  CONSTRAINT "fk_Buyer_Client1"
    FOREIGN KEY ("email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_Buyer_Requirement1"
    FOREIGN KEY ("Requirement_id")
    REFERENCES "projectSchema"."Requirement" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Seller"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Seller" (
  "email" VARCHAR(255) NOT NULL,
  "type" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("email"),
  CONSTRAINT "fk_Contact_Client10"
    FOREIGN KEY ("email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Renter"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Renter" (
  "email" VARCHAR(255) NOT NULL,
  "budget" INT NOT NULL,
  "Requirement_id" INT NOT NULL,
  PRIMARY KEY ("email"),
  CONSTRAINT "fk_Buyer_Client10"
    FOREIGN KEY ("email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_Renter_Requirement1"
    FOREIGN KEY ("Requirement_id")
    REFERENCES "projectSchema"."Requirement" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Landlord"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Landlord" (
  "email" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("email"),
  CONSTRAINT "fk_Contact_Client100"
    FOREIGN KEY ("email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Appointment"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Appointment" (
  "Id" INT NOT NULL ,
  "Date" DATE NOT NULL,
  "Time" TIMESTAMP NOT NULL,
  "Location" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("Id"),


-- -----------------------------------------------------
-- Table "projectSchema"."Listing"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Listing" (
  "idListing" INT NOT NULL ,
  "StreetNumber" INT NULL,
  "UnitNumber" VARCHAR(255) NULL,
  "StreetName" VARCHAR(255) NULL,
  "City" VARCHAR(255) NULL,
  "PostalCode" VARCHAR(255) NULL,
  "AskingPrice" INT NULL,
  "ListingDate" DATE NULL,
  "StrataCostPerMonth" INT NULL,
  "Parking" VARCHAR(255) NULL,
  "YearBuilt" YEAR NULL,
  "TotalSqFeet" INT NULL,
  "No_of_Bedrooms" INT NULL,
  "No_of_Bathrooms" INT NULL,
  "Neighbourhood" VARCHAR(255) NULL,
  "Yard" INT NULL,
  "Seller_email" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("idListing", "Seller_email"),
  CONSTRAINT "fk_Listing_Seller1"
    FOREIGN KEY ("Seller_email")
    REFERENCES "projectSchema"."Seller" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."Rental_Property"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."Rental_Property" (
  "idListing" INT NOT NULL ,
  "StreetNumber" INT NULL,
  "UnitNumber" VARCHAR(255) NULL,
  "StreetName" VARCHAR(255) NULL,
  "City" VARCHAR(255) NULL,
  "PostalCode" VARCHAR(255) NULL,
  "AskingPrice" INT NULL,
  "ListingDate" DATE NULL,
  "StrataCostPerMonth" INT NULL,
  "Parking" VARCHAR(255) NULL,
  "YearBuilt" YEAR NULL,
  "TotalSqFeet" INT NULL,
  "No_of_Bedrooms" INT NULL,
  "No_of_Bathrooms" INT NULL,
  "Neighbourhood" VARCHAR(255) NULL,
  "Yard" INT NULL,
  "Landlord_email" VARCHAR(255) NOT NULL,
  PRIMARY KEY ("idListing", "Landlord_email"),
  CONSTRAINT "fk_Rental_Property_Landlord1"
    FOREIGN KEY ("Landlord_email")
    REFERENCES "projectSchema"."Landlord" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."R_P_Interest"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."R_P_Interest" (
  "Rental_Property_idListing1" INT NOT NULL,
  "Rental_Property_Landlord_email1" VARCHAR(255) NOT NULL,
  "Renter_email" VARCHAR(255) NOT NULL,
  CONSTRAINT "fk_R_P_Interest_Rental_Property1"
    FOREIGN KEY ("Rental_Property_idListing1" , "Rental_Property_Landlord_email1")
    REFERENCES "projectSchema"."Rental_Property" ("idListing" , "Landlord_email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_R_P_Interest_Renter1"
    FOREIGN KEY ("Renter_email")
    REFERENCES "projectSchema"."Renter" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."B_L_Interest"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."B_L_Interest" (
  "Buyer_email" VARCHAR(255) NOT NULL,
  "Listing_id" INT NOT NULL,
  CONSTRAINT "fk_Buyer_has_Listing_Buyer1"
    FOREIGN KEY ("Buyer_email")
    REFERENCES "projectSchema"."Buyer" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_Buyer_has_Listing_Listing1"
    FOREIGN KEY ("Listing_id")
    REFERENCES "projectSchema"."Listing" ("idListing")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."A_A_Appointments"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."A_A_Appointments" (
  "Agent_email1" VARCHAR(255) NOT NULL,
  "Agent_email2" VARCHAR(255) NOT NULL,
  "Appointment_Id" INT NOT NULL,
  PRIMARY KEY ("Appointment_Id"),
  CONSTRAINT "fk_A_A_Appointments_Agent1"
    FOREIGN KEY ("Agent_email1")
    REFERENCES "projectSchema"."Agent" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_A_A_Appointments_Agent2"
    FOREIGN KEY ("Agent_email2")
    REFERENCES "projectSchema"."Agent" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_A_A_Appointments_Appointment1"
    FOREIGN KEY ("Appointment_Id")
    REFERENCES "projectSchema"."Appointment" ("Id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table "projectSchema"."A_C_Appointments"
-- -----------------------------------------------------
CREATE TABLE  "projectSchema"."A_C_Appointments" (
  "Agent_email" VARCHAR(255) NOT NULL,
  "Client_email" VARCHAR(255) NOT NULL,
  "Appointment_Id" INT NOT NULL,
  PRIMARY KEY ("Appointment_Id"),
  CONSTRAINT "fk_A_C_Appointments_Agent1"
    FOREIGN KEY ("Agent_email")
    REFERENCES "projectSchema"."Agent" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_A_C_Appointments_Client1"
    FOREIGN KEY ("Client_email")
    REFERENCES "projectSchema"."Client" ("email")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT "fk_A_C_Appointments_Appointment1"
    FOREIGN KEY ("Appointment_Id")
    REFERENCES "projectSchema"."Appointment" ("Id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


DROP SEQUENCE IF EXISTS "projectSchema"."Requirement_id_sequence";
CREATE SEQUENCE  "projectSchema"."Requirement_id_sequence";
ALTER TABLE "projectSchema"."Requirement" ALTER COLUMN "id" SET DEFAULT NEXTVAL('"projectSchema"."Requirement_id_sequence"');
DROP SEQUENCE IF EXISTS "projectSchema"."Appointment_Id_sequence";
CREATE SEQUENCE  "projectSchema"."Appointment_Id_sequence";
ALTER TABLE "projectSchema"."Appointment" ALTER COLUMN "Id" SET DEFAULT NEXTVAL('"projectSchema"."Appointment_Id_sequence"');
DROP SEQUENCE IF EXISTS "projectSchema"."Listing_idListing_sequence";
CREATE SEQUENCE  "projectSchema"."Listing_idListing_sequence";
ALTER TABLE "projectSchema"."Listing" ALTER COLUMN "idListing" SET DEFAULT NEXTVAL('"projectSchema"."Listing_idListing_sequence"');
DROP SEQUENCE IF EXISTS "projectSchema"."Rental_Property_idListing_sequence";
CREATE SEQUENCE  "projectSchema"."Rental_Property_idListing_sequence";
ALTER TABLE "projectSchema"."Rental_Property" ALTER COLUMN "idListing" SET DEFAULT NEXTVAL('"projectSchema"."Rental_Property_idListing_sequence"');
