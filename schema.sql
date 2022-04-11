-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projectSchema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema projectSchema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projectSchema` ;
USE `projectSchema` ;

-- -----------------------------------------------------
-- Table `projectSchema`.`Agent`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Agent` (
  `email` VARCHAR(255) NOT NULL,
  `fname` VARCHAR(255) NOT NULL,
  `lname` VARCHAR(255) NOT NULL,
  `phone_num` VARCHAR(255) NULL,
  `city` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Client` (
  `email` VARCHAR(255) NOT NULL,
  `fname` VARCHAR(255) NOT NULL,
  `lname` VARCHAR(255) NOT NULL,
  `phone_num` VARCHAR(255) NULL,
  `agent_email` VARCHAR(255) NULL,
  PRIMARY KEY (`email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Client_Agent_idx` (`agent_email` ASC) VISIBLE,
  CONSTRAINT `fk_Client_Agent`
    FOREIGN KEY (`agent_email`)
    REFERENCES `projectSchema`.`Agent` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Contact` (
  `email` VARCHAR(255) NOT NULL,
  `client_email` VARCHAR(255) NOT NULL,
  `fname` VARCHAR(255) NOT NULL,
  `lname` VARCHAR(255) NOT NULL,
  `phone_num` VARCHAR(255) NULL,
  `relationship` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`email`, `client_email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Contact_Client1_idx` (`client_email` ASC) VISIBLE,
  CONSTRAINT `fk_Contact_Client1`
    FOREIGN KEY (`client_email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Requirement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Requirement` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `YearBuilt` YEAR NULL,
  `TotalSqFeet` INT NULL,
  `No_of_Bathrooms` INT NULL,
  `No_of_Bedrooms` INT NULL,
  `Neighbourhood` VARCHAR(255) NULL,
  `Yard` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Buyer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Buyer` (
  `email` VARCHAR(255) NOT NULL,
  `budget` INT NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `Requirement_id` INT NOT NULL,
  INDEX `fk_Buyer_Client1_idx` (`email` ASC) VISIBLE,
  UNIQUE INDEX `Client_email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Buyer_Requirement1_idx` (`Requirement_id` ASC) VISIBLE,
  PRIMARY KEY (`email`),
  CONSTRAINT `fk_Buyer_Client1`
    FOREIGN KEY (`email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Buyer_Requirement1`
    FOREIGN KEY (`Requirement_id`)
    REFERENCES `projectSchema`.`Requirement` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Seller`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Seller` (
  `email` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  INDEX `fk_Contact_Client1_idx` (`email` ASC) VISIBLE,
  PRIMARY KEY (`email`),
  CONSTRAINT `fk_Contact_Client10`
    FOREIGN KEY (`email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Renter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Renter` (
  `email` VARCHAR(255) NOT NULL,
  `budget` INT NOT NULL,
  `Requirement_id` INT NOT NULL,
  INDEX `fk_Buyer_Client1_idx` (`email` ASC) VISIBLE,
  UNIQUE INDEX `Client_email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Renter_Requirement1_idx` (`Requirement_id` ASC) VISIBLE,
  PRIMARY KEY (`email`),
  CONSTRAINT `fk_Buyer_Client10`
    FOREIGN KEY (`email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Renter_Requirement1`
    FOREIGN KEY (`Requirement_id`)
    REFERENCES `projectSchema`.`Requirement` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Landlord`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Landlord` (
  `email` VARCHAR(255) NOT NULL,
  INDEX `fk_Contact_Client1_idx` (`email` ASC) VISIBLE,
  PRIMARY KEY (`email`),
  CONSTRAINT `fk_Contact_Client100`
    FOREIGN KEY (`email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Appointment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Appointment` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Date` DATE NOT NULL,
  `Time` TIMESTAMP NOT NULL,
  `Location` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Listing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Listing` (
  `idListing` INT NOT NULL AUTO_INCREMENT,
  `StreetNumber` INT NULL,
  `UnitNumber` VARCHAR(255) NULL,
  `StreetName` VARCHAR(255) NULL,
  `City` VARCHAR(255) NULL,
  `PostalCode` VARCHAR(255) NULL,
  `AskingPrice` INT NULL,
  `ListingDate` DATE NULL,
  `StrataCostPerMonth` INT NULL,
  `Parking` VARCHAR(255) NULL,
  `YearBuilt` YEAR NULL,
  `TotalSqFeet` INT NULL,
  `No_of_Bedrooms` INT NULL,
  `No_of_Bathrooms` INT NULL,
  `Neighbourhood` VARCHAR(255) NULL,
  `Yard` INT NULL,
  `Seller_email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idListing`, `Seller_email`),
  INDEX `fk_Listing_Seller1_idx` (`Seller_email` ASC) VISIBLE,
  CONSTRAINT `fk_Listing_Seller1`
    FOREIGN KEY (`Seller_email`)
    REFERENCES `projectSchema`.`Seller` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`Rental_Property`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`Rental_Property` (
  `idListing` INT NOT NULL AUTO_INCREMENT,
  `StreetNumber` INT NULL,
  `UnitNumber` VARCHAR(255) NULL,
  `StreetName` VARCHAR(255) NULL,
  `City` VARCHAR(255) NULL,
  `PostalCode` VARCHAR(255) NULL,
  `AskingPrice` INT NULL,
  `ListingDate` DATE NULL,
  `StrataCostPerMonth` INT NULL,
  `Parking` VARCHAR(255) NULL,
  `YearBuilt` YEAR NULL,
  `TotalSqFeet` INT NULL,
  `No_of_Bedrooms` INT NULL,
  `No_of_Bathrooms` INT NULL,
  `Neighbourhood` VARCHAR(255) NULL,
  `Yard` INT NULL,
  `Landlord_email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idListing`, `Landlord_email`),
  INDEX `fk_Rental_Property_Landlord1_idx` (`Landlord_email` ASC) VISIBLE,
  CONSTRAINT `fk_Rental_Property_Landlord1`
    FOREIGN KEY (`Landlord_email`)
    REFERENCES `projectSchema`.`Landlord` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`R_P_Interest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`R_P_Interest` (
  `Rental_Property_idListing1` INT NOT NULL,
  `Rental_Property_Landlord_email1` VARCHAR(255) NOT NULL,
  `Renter_email` VARCHAR(255) NOT NULL,
  INDEX `fk_R_P_Interest_Rental_Property1_idx` (`Rental_Property_idListing1` ASC, `Rental_Property_Landlord_email1` ASC) VISIBLE,
  INDEX `fk_R_P_Interest_Renter1_idx` (`Renter_email` ASC) VISIBLE,
  CONSTRAINT `fk_R_P_Interest_Rental_Property1`
    FOREIGN KEY (`Rental_Property_idListing1` , `Rental_Property_Landlord_email1`)
    REFERENCES `projectSchema`.`Rental_Property` (`idListing` , `Landlord_email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_R_P_Interest_Renter1`
    FOREIGN KEY (`Renter_email`)
    REFERENCES `projectSchema`.`Renter` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`B_L_Interest`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`B_L_Interest` (
  `Buyer_email` VARCHAR(255) NOT NULL,
  `Listing_id` INT NOT NULL,
  INDEX `fk_Buyer_has_Listing_Listing1_idx` (`Listing_id` ASC) VISIBLE,
  INDEX `fk_Buyer_has_Listing_Buyer1_idx` (`Buyer_email` ASC) VISIBLE,
  CONSTRAINT `fk_Buyer_has_Listing_Buyer1`
    FOREIGN KEY (`Buyer_email`)
    REFERENCES `projectSchema`.`Buyer` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Buyer_has_Listing_Listing1`
    FOREIGN KEY (`Listing_id`)
    REFERENCES `projectSchema`.`Listing` (`idListing`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`A_A_Appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`A_A_Appointments` (
  `Agent_email1` VARCHAR(255) NOT NULL,
  `Agent_email2` VARCHAR(255) NOT NULL,
  `Appointment_Id` INT NOT NULL,
  INDEX `fk_A_A_Appointments_Agent1_idx` (`Agent_email1` ASC) VISIBLE,
  INDEX `fk_A_A_Appointments_Agent2_idx` (`Agent_email2` ASC) VISIBLE,
  PRIMARY KEY (`Appointment_Id`),
  CONSTRAINT `fk_A_A_Appointments_Agent1`
    FOREIGN KEY (`Agent_email1`)
    REFERENCES `projectSchema`.`Agent` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_A_A_Appointments_Agent2`
    FOREIGN KEY (`Agent_email2`)
    REFERENCES `projectSchema`.`Agent` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_A_A_Appointments_Appointment1`
    FOREIGN KEY (`Appointment_Id`)
    REFERENCES `projectSchema`.`Appointment` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projectSchema`.`A_C_Appointments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `projectSchema`.`A_C_Appointments` (
  `Agent_email` VARCHAR(255) NOT NULL,
  `Client_email` VARCHAR(255) NOT NULL,
  `Appointment_Id` INT NOT NULL,
  INDEX `fk_A_C_Appointments_Agent1_idx` (`Agent_email` ASC) VISIBLE,
  INDEX `fk_A_C_Appointments_Client1_idx` (`Client_email` ASC) VISIBLE,
  PRIMARY KEY (`Appointment_Id`),
  CONSTRAINT `fk_A_C_Appointments_Agent1`
    FOREIGN KEY (`Agent_email`)
    REFERENCES `projectSchema`.`Agent` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_A_C_Appointments_Client1`
    FOREIGN KEY (`Client_email`)
    REFERENCES `projectSchema`.`Client` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_A_C_Appointments_Appointment1`
    FOREIGN KEY (`Appointment_Id`)
    REFERENCES `projectSchema`.`Appointment` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
